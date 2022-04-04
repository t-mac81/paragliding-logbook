/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  addressLine1: string,
  addressLine2?: string | null,
  city: string,
  state: string,
  zipCode: string,
  phoneNumber: string,
  bio: string,
  trackingUrl?: string | null,
  _version?: number | null,
};

export type ModelUserProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  addressLine1?: ModelStringInput | null,
  addressLine2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  trackingUrl?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  name: string,
  email: string,
  addressLine1: string,
  addressLine2?: string | null,
  city: string,
  state: string,
  zipCode: string,
  phoneNumber: string,
  bio: string,
  trackingUrl?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  addressLine1?: string | null,
  addressLine2?: string | null,
  city?: string | null,
  state?: string | null,
  zipCode?: string | null,
  phoneNumber?: string | null,
  bio?: string | null,
  trackingUrl?: string | null,
  _version?: number | null,
};

export type DeleteUserProfileInput = {
  id: string,
  _version?: number | null,
};

export type CreateGliderInput = {
  id?: string | null,
  manufacturer: string,
  model: string,
  size: string,
  color: string,
  certification: string,
  _version?: number | null,
};

export type ModelGliderConditionInput = {
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  certification?: ModelStringInput | null,
  and?: Array< ModelGliderConditionInput | null > | null,
  or?: Array< ModelGliderConditionInput | null > | null,
  not?: ModelGliderConditionInput | null,
};

export type Glider = {
  __typename: "Glider",
  id: string,
  manufacturer: string,
  model: string,
  size: string,
  color: string,
  certification: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateGliderInput = {
  id: string,
  manufacturer?: string | null,
  model?: string | null,
  size?: string | null,
  color?: string | null,
  certification?: string | null,
  _version?: number | null,
};

export type DeleteGliderInput = {
  id: string,
  _version?: number | null,
};

export type CreateFlightLogInput = {
  startDate: string,
  startTime: string,
  duration: number,
  launchSite: string,
  launchConditions: string,
  description: string,
  id?: string | null,
  _version?: number | null,
  flightLogGliderId: string,
};

export type ModelFlightLogConditionInput = {
  startDate?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  launchSite?: ModelStringInput | null,
  launchConditions?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFlightLogConditionInput | null > | null,
  or?: Array< ModelFlightLogConditionInput | null > | null,
  not?: ModelFlightLogConditionInput | null,
  flightLogGliderId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type FlightLog = {
  __typename: "FlightLog",
  startDate: string,
  startTime: string,
  duration: number,
  launchSite: string,
  launchConditions: string,
  description: string,
  glider: Glider,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  flightLogGliderId: string,
  owner?: string | null,
};

export type UpdateFlightLogInput = {
  startDate?: string | null,
  startTime?: string | null,
  duration?: number | null,
  launchSite?: string | null,
  launchConditions?: string | null,
  description?: string | null,
  id: string,
  _version?: number | null,
  flightLogGliderId?: string | null,
};

export type DeleteFlightLogInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  addressLine1?: ModelStringInput | null,
  addressLine2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  trackingUrl?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGliderFilterInput = {
  id?: ModelIDInput | null,
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  certification?: ModelStringInput | null,
  and?: Array< ModelGliderFilterInput | null > | null,
  or?: Array< ModelGliderFilterInput | null > | null,
  not?: ModelGliderFilterInput | null,
};

export type ModelGliderConnection = {
  __typename: "ModelGliderConnection",
  items:  Array<Glider | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFlightLogFilterInput = {
  startDate?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  launchSite?: ModelStringInput | null,
  launchConditions?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFlightLogFilterInput | null > | null,
  or?: Array< ModelFlightLogFilterInput | null > | null,
  not?: ModelFlightLogFilterInput | null,
  flightLogGliderId?: ModelIDInput | null,
};

export type ModelFlightLogConnection = {
  __typename: "ModelFlightLogConnection",
  items:  Array<FlightLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateGliderMutationVariables = {
  input: CreateGliderInput,
  condition?: ModelGliderConditionInput | null,
};

export type CreateGliderMutation = {
  createGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateGliderMutationVariables = {
  input: UpdateGliderInput,
  condition?: ModelGliderConditionInput | null,
};

export type UpdateGliderMutation = {
  updateGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteGliderMutationVariables = {
  input: DeleteGliderInput,
  condition?: ModelGliderConditionInput | null,
};

export type DeleteGliderMutation = {
  deleteGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateFlightLogMutationVariables = {
  input: CreateFlightLogInput,
  condition?: ModelFlightLogConditionInput | null,
};

export type CreateFlightLogMutation = {
  createFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type UpdateFlightLogMutationVariables = {
  input: UpdateFlightLogInput,
  condition?: ModelFlightLogConditionInput | null,
};

export type UpdateFlightLogMutation = {
  updateFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type DeleteFlightLogMutationVariables = {
  input: DeleteFlightLogInput,
  condition?: ModelFlightLogConditionInput | null,
};

export type DeleteFlightLogMutation = {
  deleteFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      email: string,
      addressLine1: string,
      addressLine2?: string | null,
      city: string,
      state: string,
      zipCode: string,
      phoneNumber: string,
      bio: string,
      trackingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserProfilesQuery = {
  syncUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      email: string,
      addressLine1: string,
      addressLine2?: string | null,
      city: string,
      state: string,
      zipCode: string,
      phoneNumber: string,
      bio: string,
      trackingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGliderQueryVariables = {
  id: string,
};

export type GetGliderQuery = {
  getGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListGlidersQueryVariables = {
  filter?: ModelGliderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGlidersQuery = {
  listGliders?:  {
    __typename: "ModelGliderConnection",
    items:  Array< {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGlidersQueryVariables = {
  filter?: ModelGliderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGlidersQuery = {
  syncGliders?:  {
    __typename: "ModelGliderConnection",
    items:  Array< {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFlightLogQueryVariables = {
  id: string,
};

export type GetFlightLogQuery = {
  getFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type ListFlightLogsQueryVariables = {
  filter?: ModelFlightLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlightLogsQuery = {
  listFlightLogs?:  {
    __typename: "ModelFlightLogConnection",
    items:  Array< {
      __typename: "FlightLog",
      startDate: string,
      startTime: string,
      duration: number,
      launchSite: string,
      launchConditions: string,
      description: string,
      glider:  {
        __typename: "Glider",
        id: string,
        manufacturer: string,
        model: string,
        size: string,
        color: string,
        certification: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      flightLogGliderId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFlightLogsQueryVariables = {
  filter?: ModelFlightLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFlightLogsQuery = {
  syncFlightLogs?:  {
    __typename: "ModelFlightLogConnection",
    items:  Array< {
      __typename: "FlightLog",
      startDate: string,
      startTime: string,
      duration: number,
      launchSite: string,
      launchConditions: string,
      description: string,
      glider:  {
        __typename: "Glider",
        id: string,
        manufacturer: string,
        model: string,
        size: string,
        color: string,
        certification: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      flightLogGliderId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    addressLine1: string,
    addressLine2?: string | null,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    bio: string,
    trackingUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateGliderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGliderSubscription = {
  onCreateGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateGliderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGliderSubscription = {
  onUpdateGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteGliderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGliderSubscription = {
  onDeleteGlider?:  {
    __typename: "Glider",
    id: string,
    manufacturer: string,
    model: string,
    size: string,
    color: string,
    certification: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateFlightLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFlightLogSubscription = {
  onCreateFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFlightLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFlightLogSubscription = {
  onUpdateFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFlightLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFlightLogSubscription = {
  onDeleteFlightLog?:  {
    __typename: "FlightLog",
    startDate: string,
    startTime: string,
    duration: number,
    launchSite: string,
    launchConditions: string,
    description: string,
    glider:  {
      __typename: "Glider",
      id: string,
      manufacturer: string,
      model: string,
      size: string,
      color: string,
      certification: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};
