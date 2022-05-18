import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useSelector } from 'react-redux';
import '@aws-amplify/ui-react/styles.css';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { useEffect } from 'react';
import awsconfig from './aws-exports';
import Tab1 from './pages/Tab1';
import Logbook from './pages/Logbook';
import UserProfile from './pages/UserProfile';
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
import Glider from './pages/Glider';

import { useAppDispatch } from './app/hooks';
import { setCognitoIdentity, clearCognitoIdentity } from './features/cognitoSlice';
import { ICognitoData } from './app/CognitoIdentityTypes';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  // const [cognitoGroups, setCognitoGroups] = useState<Array<string>>([]);
  // const cognitoGroups = useAppSelector(state => state.cognitoIdentity);
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

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path='/tab1'>
              <Tab1 />
            </Route>
            <Route exact path='/logbook'>
              <Logbook />
            </Route>
            <Route path='/user-profile'>
              <UserProfile />
            </Route>
            <Route path='/glider'>
              <Glider />
            </Route>
            <Route exact path='/'>
              <Redirect to='/tab1' />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            {cognitoGroups.includes('Administrators') ? (
              <IonTabButton tab='tab1' href='/tab1'>
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
            ) : (
              ''
            )}

            <IonTabButton tab='logbook' href='/logbook'>
              <IonIcon icon={ellipse} />
              <IonLabel>Logbook</IonLabel>
            </IonTabButton>
            <IonTabButton tab='user-profile' href='/user-profile'>
              <IonIcon icon={square} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab='glider' href='/glider'>
              <IonIcon icon={square} />
              <IonLabel>Glider</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default withAuthenticator(App);
