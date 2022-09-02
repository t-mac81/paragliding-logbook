import { Timeline } from 'react-twitter-widgets';

const ProfileBasic = () => (
  <Timeline dataSource={{ sourceType: 'profile', screenName: 'macmurraytrevor' }} />
);

export default ProfileBasic;
