import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GliderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserProfile {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly addressLine1: string;
  readonly addressLine2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly phoneNumber: string;
  readonly bio: string;
  readonly trackingUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

export declare class Glider {
  readonly id: string;
  readonly manufacture: string;
  readonly model: string;
  readonly size: string;
  readonly color: string;
  readonly certification: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Glider, GliderMetaData>);
  static copyOf(source: Glider, mutator: (draft: MutableModel<Glider, GliderMetaData>) => MutableModel<Glider, GliderMetaData> | void): Glider;
}