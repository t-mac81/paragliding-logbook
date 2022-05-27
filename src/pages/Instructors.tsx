import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import StudentRoster from '../components/StudentRoster';
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
      <StudentRoster />
    </IonContent>
  </IonPage>
);

export default Instructors;
