import { IonActionSheet, IonItem, IonList } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ListUserProfilesQuery, UserProfile } from '../API';
import { listUserProfiles } from '../graphql/queries';
import './StudentRoster.css';

const StudentRoster: React.FC = () => {
  const [studentList, setStudentList] = useState<Array<UserProfile> | any>([]);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const getStudentList = async () => {
    try {
      const studentData = (await API.graphql({
        query: listUserProfiles,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as { data: ListUserProfilesQuery };
      setStudentList(studentData?.data?.listUserProfiles?.items || []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div>
      <IonList>
        {studentList?.map((userProfile: UserProfile) => {
          return (
            <IonItem button key={userProfile.id} onClick={() => setShowActionSheet(true)}>
              {' '}
              {userProfile.name}
            </IonItem>
          );
        })}
      </IonList>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: 'Add Comment',
            handler: () => {
              console.log('Add Clicked');
            },
          },
          {
            text: 'View Profile',
            handler: () => {
              console.log('Add Clicked');
            },
          },
          {
            text: 'View Flights',
            handler: () => {
              console.log('Add Clicked');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Add Clicked');
            },
          },
        ]}
      />
    </div>
  );
};

export default StudentRoster;
