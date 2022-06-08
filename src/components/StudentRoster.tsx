import { IonActionSheet, IonItem, IonList, IonListHeader } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ListUserProfilesQuery, UserProfile } from '../API';
import { listUserProfiles } from '../graphql/queries';
import './StudentRoster.css';

const StudentRoster: React.FC = () => {
  const [studentList, setStudentList] = useState<Array<UserProfile>>([] as UserProfile[]);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [userProfileId, setUserProfileId] = useState<String>('');

  const getStudentList = async () => {
    try {
      const studentData = (await API.graphql({
        query: listUserProfiles,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as { data: ListUserProfilesQuery };
      const userProfiles = studentData?.data?.listUserProfiles?.items as UserProfile[];
      setStudentList(userProfiles);
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
        <IonListHeader lines='full'>Student Roster:</IonListHeader>
        {studentList?.map((userProfile: UserProfile) => {
          return (
            <IonItem
              button
              key={userProfile.id}
              onClick={() => {
                setShowActionSheet(true);
                setUserProfileId(userProfile.id);
              }}
            >
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
              window.location.href = `/user-profile/${userProfileId}`;
            },
          },
          {
            text: 'View Flights',
            handler: () => {
              console.log('View Flights Clicked');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel Clicked');
            },
          },
        ]}
      />
    </div>
  );
};

export default StudentRoster;
