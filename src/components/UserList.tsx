import { IonActionSheet, IonItem, IonList, IonListHeader } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { CognitoGroupResponse, ListUserProfilesQuery, UserProfile } from '../API';
import { addUserToGroup, removeUserFromGroup } from '../graphql/mutations';
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

  const addToGroup = async (sub: String, group: String) => {
    try {
      const response = (await API.graphql({
        query: addUserToGroup,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: {
          input: {
            user: sub,
            group,
          },
        },
      })) as unknown as CognitoGroupResponse;
      console.log('Response: ', response.success);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const removeUserFromAllGroups = async (sub: String) => {
    const groups = ['Instructors', 'Administrators'];

    const results = [];
    try {
      for (const group of groups) {
        const response = API.graphql({
          query: removeUserFromGroup,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
          variables: {
            input: {
              user: sub,
              group,
            },
          },
        }) as unknown as CognitoGroupResponse;
        results.push(response);
      }
    } catch (e) {
      console.log('Error: ', e);
    }

    await Promise.all(results);
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
              console.log('Action: adding to admins...');
              addToGroup(userProfileId, 'Administrators');
            },
          },
          {
            text: 'Add to Instructors',
            handler: () => {
              console.log('add to instructors');
              addToGroup(userProfileId, 'Instructors');
            },
          },
          {
            text: 'Remove from all Groups',
            role: 'destructive',
            handler: () => {
              console.log('Remove from groups');
              removeUserFromAllGroups(userProfileId);
            },
          },
          {
            text: 'Deactivate User',
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
