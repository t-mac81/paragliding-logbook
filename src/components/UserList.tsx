import { IonActionSheet, IonItem, IonLabel, IonList, IonListHeader, IonToggle } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { CognitoGroupResponse, ListUserProfilesQuery, UserProfile } from '../API';
import { addUserToGroup, removeUserFromGroup, updateUserProfile } from '../graphql/mutations';
import { listUserProfiles } from '../graphql/queries';
import './StudentRoster.css';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<Array<UserProfile>>([] as UserProfile[]);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [userProfileId, setUserProfileId] = useState<String>('');
  const [showDeactivated, setShowDeactivated] = useState(false);

  const getStudentListActive = async () => {
    try {
      const studentData = (await API.graphql({
        query: listUserProfiles,
        variables: {
          filter: { active: { eq: true } },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as { data: ListUserProfilesQuery };
      const userProfiles = studentData?.data?.listUserProfiles?.items as UserProfile[];
      setUserList(userProfiles);
    } catch (e) {
      console.log(e);
    }
  };

  const getStudentListDeactive = async () => {
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

  const activateUser = async (sub: String) => {
    await API.graphql({
      query: updateUserProfile,
      variables: {
        input: { active: true, id: sub },
      },
    });
  };

  const deactivateUser = async (sub: String) => {
    await API.graphql({
      query: updateUserProfile,
      variables: {
        input: { active: false, id: sub },
      },
    });
  };

  useEffect(() => {
    if (showActionSheet) return;
    if (showDeactivated) {
      getStudentListDeactive();
    } else {
      getStudentListActive();
    }
  }, [showActionSheet, showDeactivated]);

  return (
    <div>
      <IonList>
        <IonListHeader lines='full'>User List:</IonListHeader>
        <IonItem>
          <IonLabel>Show Deactiviated Users</IonLabel>
          <IonToggle
            slot='start'
            name='showDeactivated'
            checked={showDeactivated}
            onIonChange={e => setShowDeactivated(e.detail.checked)}
          />
        </IonItem>
        {userList?.map((userProfile: UserProfile) => {
          return (
            <IonItem
              button
              key={userProfile.id}
              onClick={() => {
                setShowActionSheet(true);
                setUserProfileId(userProfile.id);
                console.log('userProfileId: ', userProfileId);
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
            text: 'Activate User',
            handler: () => {
              console.log('Activate User');
              activateUser(userProfileId);
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
              console.log('Deactivate User');
              deactivateUser(userProfileId);
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
