import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ExploreContainer from '../components/ExploreContainer';
import './Admins.css';

const Admins: React.FC = () => {
  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);
  const cognitoGroups = cognitoIdentity.cognito.groups || [];
  const showAdminView = cognitoGroups.includes('Administrators');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Admins Area</IonTitle>
        </IonToolbar>
      </IonHeader>
      {showAdminView ? (
        <IonContent fullscreen>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Admins Area</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name='Tab 1 page' />
        </IonContent>
      ) : (
        ''
      )}
    </IonPage>
  );
};
export default Admins;
