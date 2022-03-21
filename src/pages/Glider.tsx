import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GliderList from '../components/GliderList';

import './Glider.css';

const Glider: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Glider</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <GliderList />
    </IonContent>
  </IonPage>
);

export default Glider;
