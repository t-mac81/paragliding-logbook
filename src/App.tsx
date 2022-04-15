import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
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
import awsconfig from './aws-exports';
import Tab1 from './pages/Tab1';
import Logbook from './pages/Logbook';
import UserProfile from './pages/UserProfile';

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

Amplify.configure(awsconfig);

const App: React.FC = () => (
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
          <IonTabButton tab='tab1' href='/tab1'>
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
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

export default withAuthenticator(App);
