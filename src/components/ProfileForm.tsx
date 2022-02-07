import { IonItem, IonInput, IonLabel, IonTextarea, IonLoading, IonCard, IonButton, IonRow, IonCol, IonGrid, } from "@ionic/react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserProfileInput, CreateUserProfileMutation, GetUserProfileQuery, UpdateUserProfileInput, UserProfile } from "../API";
import { createUserProfile, updateUserProfile } from "../graphql/mutations";
import { getUserProfile } from "../graphql/queries";
import { scrubData } from "../utils/ModelUtil";

interface CognitoData {
  sub: String
  email: String
}

export const ProfileForm: React.FC = () => {
    const [isNew, setIsNew] = useState<Boolean>(false);
    const [cognitoData, setCognitoData] = useState<CognitoData | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const { register, getValues, reset, formState: { errors } } = useForm();
    
    const onSubmit = () => {
      console.log('Test: ', getValues());
      const data = getValues() as UserProfile;
      console.log('test: ', data);
      
      if (isNew) {
        return createProfile(data);
      }

      return updateProfile(data)
    }

    useEffect(() => {
      if (!cognitoData) return;

      const getProfile = async () => {
        const profileData = (await API.graphql({
          query: getUserProfile,
          variables: {id: cognitoData?.sub},
          authMode: 'AMAZON_COGNITO_USER_POOLS'}) as {data: GetUserProfileQuery});

        if (!profileData?.data?.getUserProfile) {
          setIsNew(true)
          return;
        }

        reset(profileData.data.getUserProfile)
        setProfile(profileData.data.getUserProfile);
      }

      getProfile();
    },[cognitoData, reset])

    useEffect(() => {
      getCognitoData()
    }, [])

    const getCognitoData = async () => {
      const awsAuth = await Auth.currentSession();
      const { email, sub } = awsAuth.getIdToken().payload;
      setCognitoData({
        email,
        sub
      });
    }

    const createProfile = async (data: UserProfile) => {
      const profileData = (await API.graphql({
        query: createUserProfile,
        variables: {
          input: {
            ...data,
            id: cognitoData?.sub,
          } 
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      }) as { data: CreateUserProfileMutation })

    }

    const updateProfile = async (data: UserProfile) => {
      const profileData = await API.graphql({
        query: updateUserProfile,
        variables: {
          input: {
            ...scrubData(data),
          } 
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });

      console.log('Updated profile data: ', profileData);
    }


    if (!profile && !isNew) {
      return (
        <IonLoading isOpen={true}></IonLoading>
      )
    }
    
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form id="profile-form">
        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Email:</IonLabel>
            <IonInput { ...register('email') as any} readonly={true} value={cognitoData?.email} />
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonInput {...register('name') as any } placeholder="First Last" autocomplete="name" required={true}/>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Address:</IonLabel>
            <IonInput { ...register('addressLine1') as any } placeholder="Line 1" autocomplete="address-line1" required={true}></IonInput>
            <IonInput { ...register('addressLine2') as any } placeholder="Line 2" autocomplete="address-line2"></IonInput>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">City:</IonLabel>
            <IonInput { ...register('city') as any } placeholder="City" autocomplete="address-level2" required={true}></IonInput>
          </IonItem>
        </IonCard>    

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">State</IonLabel>
            <IonInput { ...register('state') as any } placeholder="State" autocomplete="address-level1" required={true}></IonInput>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Zip Code</IonLabel>
            <IonInput { ...register('zipCode') as any } placeholder="Zip Code" autocomplete="postal-code" required={true}></IonInput>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Phone Number</IonLabel>
            <IonInput { ...register('phoneNumber') as any } inputmode="tel" placeholder="999-999-9999" autocomplete="tel" required={true}></IonInput>
          </IonItem>
        </IonCard>    

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Bio:</IonLabel>
            <IonTextarea { ...register('bio') as any } placeholder="Previous sports, hobbies experience" autoGrow={true} required={true}></IonTextarea> 
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Inreach/Spot Tracking URL:</IonLabel>
            <IonInput { ...register('trackingUrl') as any } placeholder="Optional"></IonInput> 
          </IonItem>
        </IonCard>

        <IonButton expand="block" onClick={onSubmit}>{isNew ? "Create Profile" : "Update Profile"}</IonButton>

  </form>
  
    );
}

