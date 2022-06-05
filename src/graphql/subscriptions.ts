/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile($owner: String) {
    onCreateUserProfile(owner: $owner) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile($owner: String) {
    onUpdateUserProfile(owner: $owner) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile($owner: String) {
    onDeleteUserProfile(owner: $owner) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
    }
  }
`;
export const onCreateGlider = /* GraphQL */ `
  subscription OnCreateGlider($owner: String) {
    onCreateGlider(owner: $owner) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGlider = /* GraphQL */ `
  subscription OnUpdateGlider($owner: String) {
    onUpdateGlider(owner: $owner) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGlider = /* GraphQL */ `
  subscription OnDeleteGlider($owner: String) {
    onDeleteGlider(owner: $owner) {
      id
      manufacturer
      model
      size
      color
      certification
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFlightLog = /* GraphQL */ `
  subscription OnCreateFlightLog($owner: String) {
    onCreateFlightLog(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      flightLogGliderId
      owner
    }
  }
`;
export const onUpdateFlightLog = /* GraphQL */ `
  subscription OnUpdateFlightLog($owner: String) {
    onUpdateFlightLog(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      flightLogGliderId
      owner
    }
  }
`;
export const onDeleteFlightLog = /* GraphQL */ `
  subscription OnDeleteFlightLog($owner: String) {
    onDeleteFlightLog(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      flightLogGliderId
      owner
    }
  }
`;
