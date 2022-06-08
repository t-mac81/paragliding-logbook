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
import UserList from '../components/UserList';
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
          <UserList />
        </IonContent>
      ) : (
        ''
      )}
    </IonPage>
  );
};
export default Admins;
