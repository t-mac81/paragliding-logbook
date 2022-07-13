import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import CommentModal from '../components/CommentModal';
import StudentRoster from '../components/StudentRoster';
import './Instructors.css';

const Instructors: React.FC = () => {
  const [userProfileId, setUserProfileId] = useState<string>('');
  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);
  const cognitoGroups = cognitoIdentity.cognito.groups || [];
  const showInstructorView =
    cognitoGroups.includes('Administrators') || cognitoGroups.includes('Instructors');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Instructors Area</IonTitle>
        </IonToolbar>
      </IonHeader>

      {showInstructorView ? (
        <IonContent fullscreen>
          <StudentRoster userProfileId={userProfileId} setUserProfileId={setUserProfileId} />
          <CommentModal userProfileId={userProfileId} />
        </IonContent>
      ) : (
        ''
      )}
    </IonPage>
  );
};

export default Instructors;
