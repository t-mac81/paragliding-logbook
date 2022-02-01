import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ProfileForm } from '../components/ProfileForm';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProfileForm></ProfileForm>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
