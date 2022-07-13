import { IonActionSheet, IonItem, IonList, IonListHeader } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ListUserProfilesQuery, UserProfile } from '../API';
import { listUserProfiles } from '../graphql/queries';
import './StudentRoster.css';
import { openModal } from '../features/commentModalSlice';

export interface UserIdProps {
  userProfileId: string;
  setUserProfileId: Function;
}

const StudentRoster = ({ userProfileId, setUserProfileId }: UserIdProps) => {
  const [studentList, setStudentList] = useState<Array<UserProfile>>([] as UserProfile[]);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const dispatch = useDispatch();

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
              dispatch(openModal());
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
              window.location.href = `/logbook/${userProfileId}`;
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
