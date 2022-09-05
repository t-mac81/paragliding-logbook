import {
  IonItem,
  IonInput,
  IonLabel,
  IonLoading,
  IonCard,
  IonButton,
  IonTextarea,
  IonToast,
} from '@ionic/react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUserProfileMutation, GetUserProfileQuery, UserProfile } from '../API';
import { createUserProfile, updateUserProfile } from '../graphql/mutations';
import { getUserProfile } from '../graphql/queries';
import scrubData from '../utils/ModelUtil';
import './ProfileForm.css';
import CommentList from './CommentList';
import { RootState } from '../app/store';
import { isProfile } from '../features/hasProfileSlice';

const validationSchema = yup.object({
  name: yup.string().nullable().required('Name is required'),
  addressLine1: yup.string().nullable().required('Address is required'),
  addressLine2: yup.string().nullable(),
  city: yup.string().nullable().required('City is required'),
  state: yup
    .string()
    .nullable()
    .max(2, 'Use two letter abbreviation')
    .required('State is required'),
  zipCode: yup
    .string()
    .nullable()
    .min(5, 'Must be 5 digit zip code')
    .max(5, 'Must be 5 digit zip code')
    .required('Zip code is required'),
  phoneNumber: yup.string().nullable().required('Phone number is required'),
  // TODO: need to add better phone number validate, maybe yup-phone?
  bio: yup.string().nullable().required('A short bio is required'),
  trackingUrl: yup.string().nullable().url('Must be a valid URL'),
});

interface CognitoData {
  sub: String;
  email: String;
}

interface ProfileFormProps {
  id: string | null;
}

const ProfileForm: React.FC<ProfileFormProps> = (props: ProfileFormProps) => {
  const { id: propId } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<Boolean>(false);
  const [cognitoData, setCognitoData] = useState<CognitoData | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [showToastError, setShowToastError] = useState<boolean>(false);
  const [showToastCreate, setShowToastCreate] = useState<boolean>(false);
  const [showToastUpdate, setShowToastUpdate] = useState<boolean>(false);
  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);
  const cognitoGroups = cognitoIdentity.cognito.groups || [];
  const dispatch = useDispatch();

  const emptyProfile = {
    email: cognitoData?.email as string,
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    bio: '',
    trackingUrl: '',
    active: true,
  };

  const onSubmit = (event: any) => {
    console.log('event.target: ', event);

    const data = event as UserProfile;

    if (isNew) {
      return createProfile(data);
    }

    return updateProfile(data);
  };

  useEffect(() => {
    if (!cognitoData) return;

    setLoading(true);
    const getProfile = async () => {
      try {
        const profileData = (await API.graphql({
          query: getUserProfile,
          variables: { id: propId || cognitoData?.sub },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as { data: GetUserProfileQuery };
        console.log(profileData);

        if (!profileData?.data?.getUserProfile) {
          setIsNew(true);
          return;
        }

        const { getUserProfile: userProfile } = profileData.data;
        setProfile(userProfile);
        console.log(' prof data: ', profileData.data.getUserProfile);
      } catch (error) {
        console.log(error);
        setShowToastError(true);
        setTimeout(() => setShowToastError(false), 5000);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [cognitoData, propId]);

  useEffect(() => {
    getCognitoData();
  }, []);

  const getCognitoData = async () => {
    const awsAuth = await Auth.currentSession();
    const { email, sub } = awsAuth.getIdToken().payload;
    setCognitoData({
      email,
      sub,
    });
  };

  const createProfile = async (data: UserProfile) => {
    const response = (await API.graphql({
      query: createUserProfile,
      variables: {
        input: {
          ...data,
          id: cognitoData?.sub,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })) as { data: CreateUserProfileMutation };

    const { createUserProfile: newProfile } = response.data;
    setProfile(scrubData(newProfile));
    setIsNew(false);
    dispatch(isProfile());
    setShowToastCreate(true);
    setTimeout(() => setShowToastCreate(false), 2000);
    setTimeout(() => {
      window.location.href = '/';
    }, 2500);
  };

  const updateProfile = async (data: UserProfile) => {
    const profileData = await API.graphql({
      query: updateUserProfile,
      variables: {
        input: {
          ...scrubData(profile),
          ...scrubData(data),
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    console.log('Updated profile data: ', profileData);
    setShowToastUpdate(true);
    setTimeout(() => setShowToastUpdate(false), 2000);
  };

  if (loading) {
    return <IonLoading isOpen />;
  }

  return (
    <div>
      <Formik
        initialValues={profile || emptyProfile}
        validationSchema={validationSchema}
        onSubmit={event => {
          onSubmit(event);
        }}
      >
        {formikProps => (
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <form onSubmit={formikProps.handleSubmit}>
            <IonToast isOpen={showToastError} message='Network Error! Please try again' />
            <IonToast isOpen={showToastCreate} message='Your profile has been created!' />
            <IonToast isOpen={showToastUpdate} message='Your profile has been updated!' />
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Email: </IonLabel>
                <IonInput
                  type='email'
                  value={formikProps?.values?.email || null}
                  readonly
                  onIonChange={formikProps.handleChange}
                />
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Name: </IonLabel>
                <IonInput
                  type='text'
                  autocomplete='new-password'
                  name='name'
                  value={formikProps.values.name}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>{formikProps.touched.name && formikProps.errors.name}</div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Address: </IonLabel>
                <IonInput
                  type='text'
                  autocomplete='new-password'
                  name='addressLine1'
                  placeholder='Line 1'
                  value={formikProps.values.addressLine1}
                  onIonChange={formikProps.handleChange}
                />
                <IonInput
                  type='text'
                  autocomplete='new-password'
                  name='addressLine2'
                  placeholder='Line 2'
                  value={formikProps.values.addressLine2}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>
                  {formikProps.touched.addressLine1 && formikProps.errors.addressLine1}
                </div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> City: </IonLabel>
                <IonInput
                  type='text'
                  autocomplete='new-password'
                  name='city'
                  placeholder='City'
                  value={formikProps.values.city}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>{formikProps.touched.city && formikProps.errors.city}</div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> State </IonLabel>
                <IonInput
                  type='text'
                  autocomplete='new-password'
                  name='state'
                  placeholder='State'
                  value={formikProps.values.state}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>{formikProps.touched.state && formikProps.errors.state}</div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Zip Code </IonLabel>
                <IonInput
                  autocomplete='new-password'
                  name='zipCode'
                  placeholder='99999'
                  value={formikProps.values.zipCode}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>
                  {formikProps.touched.zipCode && formikProps.errors.zipCode}
                </div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Phone Number </IonLabel>
                <IonInput
                  type='tel'
                  autocomplete='new-password'
                  name='phoneNumber'
                  inputmode='tel'
                  placeholder='999-999-9999'
                  value={formikProps.values.phoneNumber}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>
                  {formikProps.touched.phoneNumber && formikProps.errors.phoneNumber}
                </div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Bio: </IonLabel>
                <IonTextarea
                  placeholder='Previous sports, hobbies experience'
                  autoGrow
                  name='bio'
                  value={formikProps.values.bio}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>{formikProps.touched.bio && formikProps.errors.bio}</div>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel position='stacked'> Inreach / Spot Tracking URL: </IonLabel>
                <IonInput
                  placeholder='Optional'
                  name='trackingUrl'
                  value={formikProps.values.trackingUrl}
                  onIonChange={formikProps.handleChange}
                />
                <div className='error'>
                  {formikProps.touched.trackingUrl && formikProps.errors.trackingUrl}
                </div>
              </IonItem>
            </IonCard>
            {/* TODO: add genric error for form issues */}
            {propId === null ? (
              <IonButton type='submit' disabled={loading}>
                {isNew ? 'Create Profile' : 'Update Profile'}
              </IonButton>
            ) : (
              ''
            )}
          </form>
        )}
      </Formik>
      {cognitoGroups.includes('Instructors') ? <CommentList propId={propId} /> : ''}
    </div>
  );
};
export default ProfileForm;
