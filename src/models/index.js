// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Glider } = initSchema(schema);

export {
  UserProfile,
  Glider
};