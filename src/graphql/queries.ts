/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getGlider = /* GraphQL */ `
  query GetGlider($id: ID!) {
    getGlider(id: $id) {
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
export const listGliders = /* GraphQL */ `
  query ListGliders(
    $filter: ModelGliderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGliders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGliders = /* GraphQL */ `
  query SyncGliders(
    $filter: ModelGliderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGliders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
