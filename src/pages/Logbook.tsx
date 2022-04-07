import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Logbook.css';

const Logbook: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Logbook</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Logbook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name='LogBook Page' />
    </IonContent>
  </IonPage>
);

export default Logbook;
