import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import TwitterFeed from '../components/TwitterFeed';
import './LandingPage.css';

const LandingPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Landing Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <TwitterFeed />
    </IonContent>
  </IonPage>
);

export default LandingPage;
