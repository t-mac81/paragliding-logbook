import { Timeline } from 'react-twitter-widgets';

const TwitterFeed = () => (
  <Timeline dataSource={{ sourceType: 'profile', screenName: 'macmurraytrevor' }} />
);

export default TwitterFeed;
