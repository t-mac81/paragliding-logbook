import Amplify, { API, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useSelector } from 'react-redux';
import '@aws-amplify/ui-react/styles.css';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { airplane, book, clipboard, lockClosed, logOut, person, trailSign } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import awsconfig from './aws-exports';
import Logbook from './pages/Logbook';
import UserProfile from './pages/UserProfile';
import Gliders from './pages/Gliders';
import Admins from './pages/Admins';

import { RootState } from './app/store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { useAppDispatch } from './app/hooks';
import { setCognitoIdentity, clearCognitoIdentity } from './features/cognitoSlice';
import { ICognitoData } from './app/CognitoIdentityTypes';
import LandingPage from './pages/LandingPage';
import Instructors from './pages/Instructors';
import { GetUserProfileQuery } from './API';
import { getUserProfile } from './graphql/queries';
import { isProfile } from './features/hasProfileSlice';

Amplify.configure(awsconfig);

interface MatchParams {
  id?: string | undefined;
}

interface ProfileState {
  hasProfileState: any;
  hasProfile: boolean;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const App = () => {
  const dispatch = useAppDispatch();
  const { hasProfile }: ProfileState = useSelector((store: ProfileState) => store.hasProfileState);
  const [profileLoading, setProfileLoading] = useState<Boolean>(true);
  const [cognitoLoading, setCognitoLoading] = useState<Boolean>(true);
  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);
  const cognitoGroups = cognitoIdentity.cognito.groups || [];
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const getCognitoData = async () => {
      try {
        console.log('getCognitoData()...');
        const awsAuth = await Auth.currentSession();
        const authPayload = awsAuth.getIdToken().payload;
        const groups: Array<string> = authPayload['cognito:groups'];
        const { sub, email } = authPayload;
        const cognitoIdent: ICognitoData = {
          sub,
          email,
          groups,
        };

        console.log('Got cognito identity: ', cognitoIdent);
        dispatch(setCognitoIdentity(cognitoIdent));
      } catch (e) {
        clearCognitoIdentity();
      } finally {
        setCognitoLoading(false);
      }
    };
    getCognitoData();
  }, [dispatch]);

  useEffect(() => {
    if (cognitoLoading) return;

    const getProfile = async () => {
      try {
        const profileData = (await API.graphql({
          query: getUserProfile,
          variables: { id: cognitoIdentity?.cognito?.sub },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as { data: GetUserProfileQuery };

        if (profileData.data.getUserProfile) {
          dispatch(isProfile());
          return;
        }
      } catch (e) {
        console.log(e);
      } finally {
        setProfileLoading(false);
      }
    };
    getProfile();
  }, [cognitoIdentity?.cognito?.sub, cognitoLoading, dispatch, hasProfile]);

  if (profileLoading || cognitoLoading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id='menuContent'>
          <Route exact path='/landingpage'>
            <LandingPage />
          </Route>
          <Route exact path='/logbook'>
            <Logbook id={null} />
          </Route>
          <Route path='/user-profile'>
            <UserProfile id={null} />
          </Route>
          <Route
            path='/user-profile/:id'
            render={({ match }: MatchProps) => <UserProfile id={match.params.id || null} />}
          />
          <Route
            path='/logbook/:id'
            render={({ match }: MatchProps) => <Logbook id={match.params.id || null} />}
          />
          <Route path='/gliders'>
            <Gliders />
          </Route>
          <Route exact path='/'>
            {hasProfile ? <Redirect to='/landingpage' /> : <Redirect to='/user-profile' />}
          </Route>
          <Route exact path='/instructors'>
            <Instructors />
          </Route>
          <Route exact path='/admins'>
            <Admins />
          </Route>
        </IonRouterOutlet>
        {hasProfile ? (
          <IonMenu side='start' contentId='menuContent'>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem item-id='landingpage' href='/landingpage'>
                  <IonIcon icon={trailSign} />
                  <IonLabel>Landing Page</IonLabel>
                </IonItem>
                <IonItem item-id='logbook' href='/logbook'>
                  <IonIcon icon={book} />
                  <IonLabel>Logbook</IonLabel>
                </IonItem>
                <IonItem item-id='user-profile' href='/user-profile'>
                  <IonIcon icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem item-id='gliders' href='/gliders'>
                  <IonIcon icon={airplane} />
                  <IonLabel>Gliders</IonLabel>
                </IonItem>
                {cognitoGroups.includes('Instructors') ? (
                  <IonItem item-id='instructors' href='/instructors'>
                    <IonIcon icon={clipboard} />
                    <IonLabel>Instructors Area</IonLabel>
                  </IonItem>
                ) : (
                  ''
                )}
                {cognitoGroups.includes('Administrators') ? (
                  <IonItem item-id='admins' href='/admins'>
                    <IonIcon icon={lockClosed} />
                    <IonLabel>Admins Area</IonLabel>
                  </IonItem>
                ) : (
                  ''
                )}
                <IonItem item-id='logout' href='/' onClick={() => logout()}>
                  <IonIcon icon={logOut} />
                  <IonLabel>Logout</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
        ) : (
          ''
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default withAuthenticator(App);
