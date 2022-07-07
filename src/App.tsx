import Amplify, { Auth } from 'aws-amplify';
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
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { airplane, book, clipboard, lockClosed, logOut, person, trailSign } from 'ionicons/icons';
import { useEffect } from 'react';
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

Amplify.configure(awsconfig);

interface MatchParams {
  id?: string | undefined;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCognitoData = async () => {
      try {
        console.log('getCognitoData()...');
        const awsAuth = await Auth.currentSession();
        const authPayload = awsAuth.getIdToken().payload;
        const groups: Array<string> = authPayload['cognito:groups'];
        const { sub, email } = authPayload;
        const cognitoIdentity: ICognitoData = {
          sub,
          email,
          groups,
        };

        console.log('Got cognito identity: ', cognitoIdentity);
        dispatch(setCognitoIdentity(cognitoIdentity));
      } catch (e) {
        clearCognitoIdentity();
      }
    };

    getCognitoData();
  }, [dispatch]);

  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);
  const cognitoGroups = cognitoIdentity.cognito.groups || [];
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
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
            <Redirect to='/landingpage' />
          </Route>
          <Route exact path='/instructors'>
            <Instructors />
          </Route>
          <Route exact path='/admins'>
            <Admins />
          </Route>
        </IonRouterOutlet>
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
      </IonReactRouter>
    </IonApp>
  );
};

export default withAuthenticator(App);
