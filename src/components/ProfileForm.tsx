import { IonItem, IonInput, IonLabel, IonTextarea, IonLoading, } from "@ionic/react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GetUserProfileQuery, UserProfile } from "../API";
import { getUserProfile } from "../graphql/queries";

interface CognitoData {
  sub: String
  email: String
}

export const ProfileForm: React.FC = () => {
    const [isNew, setIsNew] = useState<Boolean>(false);
    const [cognitoData, setCognitoData] = useState<CognitoData | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
      defaultValues: {
        name: ''
      }
    });
        const onSubmit = (data: any) => {
        console.log('test: ', data);
    }

    useEffect(() => {
      if (!cognitoData) return;
      getProfile();
    },[cognitoData])

    useEffect(() => {
      getCognitoData()
    }, [])

    const getCognitoData = async () => {
      const awsAuth = await Auth.currentSession();
      const { email, sub } = awsAuth.getIdToken().payload;
      console.log('Email: ', email)
      console.log('Sub: ', sub)
      setCognitoData({
        email,
        sub
      });
    }

    const getProfile = async () => {
      const profileData = (await API.graphql({
        query: getUserProfile,
        variables: {id: cognitoData?.sub},
        authMode: 'AMAZON_COGNITO_USER_POOLS'}) as {data: GetUserProfileQuery});
      if (!profileData?.data?.getUserProfile) {
        setIsNew(true)
      }
    }

    const createProfile = async () => {
      
    }

    const updateProfile =async () => {
      
    }

    if (!profile && !isNew) {
      return (
        <IonLoading isOpen={true}></IonLoading>
      )
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
        <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput {...register('name')} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Address:</IonLabel>
          <IonInput placeholder="Address Line 1" autocomplete="address-line1" required={true}></IonInput>
          <IonInput placeholder="Address Line 2" autocomplete="address-line2"></IonInput>
          <IonInput placeholder="City" autocomplete="address-level2" required={true}></IonInput>
          <IonInput placeholder="State" autocomplete="address-level1" required={true}></IonInput>
          <IonInput placeholder="Zip Code" autocomplete="postal-code" required={true}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Phone Number</IonLabel>
          <IonInput inputmode="tel" placeholder="999-999-9999" autocomplete="tel" required={true}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Bio:</IonLabel>
          <IonTextarea placeholder="Previous sports, hobbies experience" autoGrow={true} required={true}></IonTextarea> 
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Inreach/Spot Tracking URL:</IonLabel>
          <IonInput placeholder="Optional"></IonInput> 
        </IonItem>
    <input type="submit" />
  </form>
    );
}

