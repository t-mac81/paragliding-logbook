import { IonActionSheet, IonItem, IonList, IonListHeader } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ListUserProfilesQuery, UserProfile } from '../API';
import { listUserProfiles } from '../graphql/queries';
import './StudentRoster.css';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<Array<UserProfile>>([] as UserProfile[]);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [userProfileId, setUserProfileId] = useState<String>('');

  const getStudentList = async () => {
    try {
      const studentData = (await API.graphql({
        query: listUserProfiles,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as { data: ListUserProfilesQuery };
      const userProfiles = studentData?.data?.listUserProfiles?.items as UserProfile[];
      setUserList(userProfiles);
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
        <IonListHeader lines='full'>User List:</IonListHeader>
        {userList?.map((userProfile: UserProfile) => {
          return (
            <IonItem
              button
              key={userProfile.id}
              onClick={() => {
                setShowActionSheet(true);
                setUserProfileId(userProfile.id);
                console.log(userProfileId);
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
            text: 'Add to Admins',
            handler: () => {
              console.log('add to admins');
            },
          },
          {
            text: 'Add to Instructors',
            handler: () => {
              console.log('add to instructors');
            },
          },
          {
            text: 'Remove from all Groups',
            role: 'destructive',
            handler: () => {
              console.log('Remove from groups');
            },
          },
          {
            text: 'Delete User',
            role: 'destructive',
            handler: () => {
              console.log('Delete User');
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

export default UserList;
