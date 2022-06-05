import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ProfileForm from '../components/ProfileForm';
import './UserProfile.css';

interface UserProfileProps {
  id: string | null;
}

const UserProfile: React.FC<UserProfileProps> = (props: UserProfileProps) => {
  const { id } = props;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProfileForm id={id} />
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
