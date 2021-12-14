import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">User Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileForm></ProfileForm>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
