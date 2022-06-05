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
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  author?: UserProfile | null,
  message: string,
  createdAt: string,
  updatedAt: string,
  userProfileCommentsId?: string | null,
  commentAuthorId?: string | null,
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
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  message: string,
  userProfileCommentsId?: string | null,
  commentAuthorId?: string | null,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  userProfileCommentsId?: ModelIDInput | null,
  commentAuthorId?: ModelIDInput | null,
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

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  userProfileCommentsId?: string | null,
  commentAuthorId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateGliderInput = {
  id?: string | null,
  manufacturer: string,
  model: string,
  size: string,
  color: string,
  certification: string,
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
  owner?: string | null,
};

export type UpdateGliderInput = {
  id: string,
  manufacturer?: string | null,
  model?: string | null,
  size?: string | null,
  color?: string | null,
  certification?: string | null,
};

export type DeleteGliderInput = {
  id: string,
};

export type CreateFlightLogInput = {
  startDateTime: string,
  duration: number,
  launchSite: string,
  launchConditions: string,
  description: string,
  id?: string | null,
  flightLogGliderId: string,
};

export type ModelFlightLogConditionInput = {
  startDateTime?: ModelStringInput | null,
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

export type FlightLog = {
  __typename: "FlightLog",
  startDateTime: string,
  duration: number,
  launchSite: string,
  launchConditions: string,
  description: string,
  glider: Glider,
  id: string,
  createdAt: string,
  updatedAt: string,
  flightLogGliderId: string,
  owner?: string | null,
};

export type UpdateFlightLogInput = {
  startDateTime?: string | null,
  duration?: number | null,
  launchSite?: string | null,
  launchConditions?: string | null,
  description?: string | null,
  id: string,
  flightLogGliderId?: string | null,
};

export type DeleteFlightLogInput = {
  id: string,
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
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  userProfileCommentsId?: ModelIDInput | null,
  commentAuthorId?: ModelIDInput | null,
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
};

export type ModelFlightLogFilterInput = {
  startDateTime?: ModelStringInput | null,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
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
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      author?:  {
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
        owner?: string | null,
      } | null,
      message: string,
      createdAt: string,
      updatedAt: string,
      userProfileCommentsId?: string | null,
      commentAuthorId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFlightLogQueryVariables = {
  id: string,
};

export type GetFlightLogQuery = {
  getFlightLog?:  {
    __typename: "FlightLog",
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
      startDateTime: string,
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
        owner?: string | null,
      },
      id: string,
      createdAt: string,
      updatedAt: string,
      flightLogGliderId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message: string,
        createdAt: string,
        updatedAt: string,
        userProfileCommentsId?: string | null,
        commentAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    author?:  {
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
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    message: string,
    createdAt: string,
    updatedAt: string,
    userProfileCommentsId?: string | null,
    commentAuthorId?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnCreateFlightLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFlightLogSubscription = {
  onCreateFlightLog?:  {
    __typename: "FlightLog",
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
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
    startDateTime: string,
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
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    flightLogGliderId: string,
    owner?: string | null,
  } | null,
};
