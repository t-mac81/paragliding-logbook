/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      addressLine1
      addressLine2
      city
      state
      zipCode
      phoneNumber
      bio
      trackingUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      addressLine1
      addressLine2
      city
      state
      zipCode
      phoneNumber
      bio
      trackingUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      addressLine1
      addressLine2
      city
      state
      zipCode
      phoneNumber
      bio
      trackingUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createGlider = /* GraphQL */ `
  mutation CreateGlider(
    $input: CreateGliderInput!
    $condition: ModelGliderConditionInput
  ) {
    createGlider(input: $input, condition: $condition) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateGlider = /* GraphQL */ `
  mutation UpdateGlider(
    $input: UpdateGliderInput!
    $condition: ModelGliderConditionInput
  ) {
    updateGlider(input: $input, condition: $condition) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteGlider = /* GraphQL */ `
  mutation DeleteGlider(
    $input: DeleteGliderInput!
    $condition: ModelGliderConditionInput
  ) {
    deleteGlider(input: $input, condition: $condition) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createFlightLog = /* GraphQL */ `
  mutation CreateFlightLog(
    $input: CreateFlightLogInput!
    $condition: ModelFlightLogConditionInput
  ) {
    createFlightLog(input: $input, condition: $condition) {
      startDate
      startTime
      duration
      launchSite
      launchConditions
      description
      glider {
        id
        manufacturer
        model
        size
        color
        certification
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      flightLogGliderId
      owner
    }
  }
`;
export const updateFlightLog = /* GraphQL */ `
  mutation UpdateFlightLog(
    $input: UpdateFlightLogInput!
    $condition: ModelFlightLogConditionInput
  ) {
    updateFlightLog(input: $input, condition: $condition) {
      startDate
      startTime
      duration
      launchSite
      launchConditions
      description
      glider {
        id
        manufacturer
        model
        size
        color
        certification
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      flightLogGliderId
      owner
    }
  }
`;
export const deleteFlightLog = /* GraphQL */ `
  mutation DeleteFlightLog(
    $input: DeleteFlightLogInput!
    $condition: ModelFlightLogConditionInput
  ) {
    deleteFlightLog(input: $input, condition: $condition) {
      startDate
      startTime
      duration
      launchSite
      launchConditions
      description
      glider {
        id
        manufacturer
        model
        size
        color
        certification
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      flightLogGliderId
      owner
    }
  }
`;
