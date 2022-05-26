import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import GliderList from '../components/GliderList';

import './Gliders.css';

const Gliders: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Gliders</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <GliderList />
    </IonContent>
  </IonPage>
);

export default Gliders;
