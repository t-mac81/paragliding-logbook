import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GliderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FlightLogMetaData = {
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
  readonly manufacturer: string;
  readonly model: string;
  readonly size: string;
  readonly color: string;
  readonly certification: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Glider, GliderMetaData>);
  static copyOf(source: Glider, mutator: (draft: MutableModel<Glider, GliderMetaData>) => MutableModel<Glider, GliderMetaData> | void): Glider;
}

export declare class FlightLog {
  readonly id: string;
  readonly startDate: string;
  readonly startTime: string;
  readonly duration: number;
  readonly launchSite: string;
  readonly launchConditions: string;
  readonly description: string;
  readonly glider: Glider;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly flightLogGliderId: string;
  constructor(init: ModelInit<FlightLog, FlightLogMetaData>);
  static copyOf(source: FlightLog, mutator: (draft: MutableModel<FlightLog, FlightLogMetaData>) => MutableModel<FlightLog, FlightLogMetaData> | void): FlightLog;
}