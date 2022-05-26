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
import './Admins.css';

const Admins: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Admins Area</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Admins Area</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name='Tab 1 page' />
    </IonContent>
  </IonPage>
);

export default Admins;
