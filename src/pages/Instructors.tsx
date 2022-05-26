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
import './Instructors.css';

const Instructors: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Instructors Area</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Instructors Area</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name='Instructors Area' />
    </IonContent>
  </IonPage>
);

export default Instructors;
