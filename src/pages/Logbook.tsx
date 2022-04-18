import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import LogbookList from '../components/LogbookList';
import LogbookModalForm from '../components/LogbookModalForm';
import LogbookStats from '../components/LogbookStats';
import { FlightLog } from '../models';
import './Logbook.css';

const Logbook: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [logbookList, setLogbookList] = useState<Array<FlightLog>>([]);
  const [flightlogEdit, setFlightlogEdit] = useState<FlightLog | any>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Logbook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <LogbookStats logbookList={logbookList} />
        <IonButton onClick={() => setShowModal(true)}>New Entry</IonButton>
        <LogbookList
          showModal={showModal}
          setShowModal={setShowModal}
          flightlogEdit={flightlogEdit}
          setFlightlogEdit={setFlightlogEdit}
          logbookList={logbookList}
          setLogbookList={setLogbookList}
        />
        <LogbookModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          flightlogEdit={flightlogEdit}
          setFlightlogEdit={setFlightlogEdit}
        />
      </IonContent>
    </IonPage>
  );
};

export default Logbook;
