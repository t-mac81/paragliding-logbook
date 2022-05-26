import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name='Landing page' />
    </IonContent>
  </IonPage>
);

export default LandingPage;
