import {
  IonItem,
  IonInput,
  IonLabel,
  IonLoading,
  IonCard,
  IonButton,
  IonTextarea,
} from "@ionic/react";
import { API, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  CreateUserProfileMutation,
  GetUserProfileQuery,
  UserProfile,
} from "../API";
import { createUserProfile, updateUserProfile } from "../graphql/mutations";
import { getUserProfile } from "../graphql/queries";
import { scrubData } from "../utils/ModelUtil";
import "./ProfileForm.css";

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

export const ProfileForm: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [autofill, setAutofill] = useState<Boolean>(false);
  const [isNew, setIsNew] = useState<Boolean>(false);
  const [cognitoData, setCognitoData] = useState<CognitoData | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onFocus = (event: any) => {
    console.log("onFocus: ", event.target.value);
  };

  const onSubmit = (event: any) => {
    console.log("event.target: ", event);

    const data = event as UserProfile;

    if (isNew) {
      return createProfile(data);
    }

    return updateProfile(data);
  };

  useEffect(() => {
    if (!cognitoData) return;

    const getProfile = async () => {
      try {
        const profileData = (await API.graphql({
          query: getUserProfile,
          variables: { id: cognitoData?.sub },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        })) as { data: GetUserProfileQuery };
        if (!profileData?.data?.getUserProfile) {
          setIsNew(true);
          return;
        }

        const { getUserProfile: profile } = profileData.data;
        reset(scrubData(profile));
        console.log(" prof data: ", profileData.data.getUserProfile);
        setProfile(profileData.data.getUserProfile);
      } catch (error) {
        // TODO add iontoast for error
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [cognitoData, reset]);

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
    const profileData = (await API.graphql({
      query: createUserProfile,
      variables: {
        input: {
          ...data,
          id: cognitoData?.sub,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: CreateUserProfileMutation };
  };

  const updateProfile = async (data: UserProfile) => {
    const profileData = await API.graphql({
      query: updateUserProfile,
      variables: {
        input: {
          ...scrubData(data),
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    console.log("Updated profile data: ", profileData);
  };

  if ((!profile && !isNew) || loading) {
    return <IonLoading isOpen={true}></IonLoading>;
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} >
      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Email: </IonLabel>
          < IonInput
            type="email"
            autocomplete="new-password"
            {...(register("email", { required: "Email is required" }) as any)}
            readonly={true}
            value={cognitoData?.email}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Name: </IonLabel>
          < IonInput
            type="text"
            autocomplete="new-password"
            {...(register("name", { required: "Name is required" }) as any)}
            rules={{ required: true }
            }
          />
          < ErrorMessage errors={errors} name="name" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Address: </IonLabel>
          < IonInput
            autocomplete="new-password"
            {...(register("addressLine1", {
              required: "Address is required",
            }) as any)
            }
            placeholder="Line 1"
          > </IonInput>
          < IonInput
            autocomplete="new-password"
            {...(register("addressLine2") as any)}
            placeholder="Line 2"
          > </IonInput>
          < ErrorMessage errors={errors} name="addressLine1" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > City: </IonLabel>
          < IonInput
            autocomplete="new-password"
            {...(register("city", { required: "City is required" }) as any)}
            placeholder="City"
          > </IonInput>
          < ErrorMessage errors={errors} name="city" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > State </IonLabel>
          < IonInput
            autocomplete="new-password"
            {...(register("state", { required: "State is required" }) as any)}
            placeholder="State"
          > </IonInput>
          < ErrorMessage errors={errors} name="state" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Zip Code </IonLabel>
          < IonInput
            autocomplete="new-password"
            {...(register("zipCode", {
              required: "Zip code is required",
            }) as any)
            }
            placeholder="99999"
          > </IonInput>
          < ErrorMessage errors={errors} name="zipCode" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Phone Number </IonLabel>
          < IonInput
            type="tel"
            autocomplete="new-password"
            {...(register("phoneNumber", {
              required: "Phone number is required",
            }) as any)
            }
            inputmode="tel"
            placeholder="999-999-9999"
          > </IonInput>
          < ErrorMessage errors={errors} name="phoneNumber" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Bio: </IonLabel>
          < IonTextarea
            {...(register("bio", { required: "Bio is required" }) as any)}
            placeholder="Previous sports, hobbies experience"
            autoGrow={true}
          > </IonTextarea>
          < ErrorMessage errors={errors} name="bio" as="p" />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel position="stacked" > Inreach / Spot Tracking URL: </IonLabel>
          < IonInput
            {...(register("trackingUrl") as any)}
            placeholder="Optional"
          > </IonInput>
          < ErrorMessage errors={errors} name="trackingUrl" as="p" />
        </IonItem>
      </IonCard>

      <IonButton type="submit" disabled={loading}>
        {isNew ? "Create Profile" : "Update Profile"}
      </IonButton>
    </form>
  );
};
