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

const UserProfile: React.FC = () => (
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
      <ProfileForm />
    </IonContent>
  </IonPage>
);

export default UserProfile;
