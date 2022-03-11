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
import {
  Formik,
} from 'formik';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import {
  CreateUserProfileMutation,
  GetUserProfileQuery,
  UserProfile,
} from '../API';
import { createUserProfile, updateUserProfile } from '../graphql/mutations';
import { getUserProfile } from '../graphql/queries';
import scrubData from '../utils/ModelUtil';
import './ProfileForm.css';

interface FormValues {
  email: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  bio: string;
  trackingUrl: string | null | undefined;
}

interface CognitoData {
  sub: String;
  email: String;
}

const ProfileForm: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [isNew, setIsNew] = useState<Boolean>(false);
  const [cognitoData, setCognitoData] = useState<CognitoData | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [showToastError, setShowToastError] = useState<boolean>(false);
  const [showToastCreate, setShowToastCreate] = useState<boolean>(false);
  const [showToastUpdate, setShowToastUpdate] = useState<boolean>(false);

  const emptyProfile = {
    email: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    bio: '',
    trackingUrl: '',
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
          variables: { id: cognitoData?.sub },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as { data: GetUserProfileQuery };

        if (!profileData?.data?.getUserProfile) {
          setIsNew(true);
          return;
        }

        const { getUserProfile: userProfile } = profileData.data;
        (scrubData(profile));
        setProfile(userProfile);
        console.log(' prof data: ', profileData.data.getUserProfile);
      } catch (error) {
        setShowToastError(true);
        setTimeout(() => setShowToastError(false), 5000);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [cognitoData, profile]);

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
    const response = await API.graphql({
      query: createUserProfile,
      variables: {
        input: {
          ...data,
          id: cognitoData?.sub,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as { data: CreateUserProfileMutation };

    const { createUserProfile: newProfile } = response.data;
    setProfile(scrubData(newProfile));
    setIsNew(false);
    setShowToastCreate(true);
    setTimeout(() => setShowToastCreate(false), 2000);
  };

  const updateProfile = async (data: UserProfile) => {
    const profileData = await API.graphql({
      query: updateUserProfile,
      variables: {
        input: {
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
    <Formik
      initialValues={profile || emptyProfile}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >

      {(formikProps) => (
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
                autocomplete='new-password'
                value={formikProps.values.email}
                readonly
              />
              <ErrorMessage name='email' as='p'>
                {formikProps.touched.email && formikProps.errors.email}
              </ErrorMessage>
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
              />
              <ErrorMessage name='name' as='p'>
                {formikProps.touched.name && formikProps.errors.name}
              </ErrorMessage>
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
              />
              <IonInput
                type='text'
                autocomplete='new-password'
                name='addressLine2'
                placeholder='Line 2'
                value={formikProps.values.addressLine2}
              />
              <ErrorMessage name='addressLine1' as='p'>
                {formikProps.touched.addressLine1 && formikProps.errors.addressLine1}
              </ErrorMessage>
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
              />
              <ErrorMessage name='city' as='p'>
                {formikProps.touched.city && formikProps.errors.city}
              </ErrorMessage>
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
              />
              <ErrorMessage name='state' as='p'>
                {formikProps.touched.state && formikProps.errors.state}
              </ErrorMessage>
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
              />
              <ErrorMessage name='zipCode' as='p'>
                {formikProps.touched.zipCode && formikProps.errors.zipCode}
              </ErrorMessage>
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
              />
              <ErrorMessage name='phoneNumber' as='p'>
                {formikProps.touched.phoneNumber && formikProps.errors.phoneNumber}
              </ErrorMessage>
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
              />
              <ErrorMessage name='bio' as='p'>
                {formikProps.touched.bio && formikProps.errors.bio}
              </ErrorMessage>
            </IonItem>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonLabel position='stacked'> Inreach / Spot Tracking URL: </IonLabel>
              <IonInput
                placeholder='Optional'
                name='trackingUrl'
                value={formikProps.values.trackingUrl}
              />
              <ErrorMessage name='trackingUrl' as='p'>
                {formikProps.touched.trackingUrl && formikProps.errors.trackingUrl}
              </ErrorMessage>
            </IonItem>
          </IonCard>

          <IonButton type='submit' disabled={loading}>
            {isNew ? 'Create Profile' : 'Update Profile'}
          </IonButton>
        </form>
      )}
    </Formik>
  );
};
export default ProfileForm;
