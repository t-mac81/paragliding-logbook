// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Glider, FlightLog } = initSchema(schema);

export {
  UserProfile,
  Glider,
  FlightLog
};