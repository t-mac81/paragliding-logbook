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
      comments {
        items {
          id
          message
          createdAt
          updatedAt
          userProfileCommentsId
          commentAuthorId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      author {
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
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      message
      createdAt
      updatedAt
      userProfileCommentsId
      commentAuthorId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author {
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
          owner
        }
        message
        createdAt
        updatedAt
        userProfileCommentsId
        commentAuthorId
        owner
      }
      nextToken
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
      owner
      createdAt
      updatedAt
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFlightLog = /* GraphQL */ `
  query GetFlightLog($id: ID!) {
    getFlightLog(id: $id) {
      startDateTime
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
        owner
        createdAt
        updatedAt
      }
      owner
      id
      createdAt
      updatedAt
      flightLogGliderId
    }
  }
`;
export const listFlightLogs = /* GraphQL */ `
  query ListFlightLogs(
    $filter: ModelFlightLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlightLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        startDateTime
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
          owner
          createdAt
          updatedAt
        }
        owner
        id
        createdAt
        updatedAt
        flightLogGliderId
      }
      nextToken
    }
  }
`;
