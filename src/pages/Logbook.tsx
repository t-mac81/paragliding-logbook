import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LogbookList from '../components/LogbookList';
import './Logbook.css';

const Logbook: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Logbook</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <LogbookList />
    </IonContent>
  </IonPage>
);

export default Logbook;
