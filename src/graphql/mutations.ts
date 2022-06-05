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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const updateFlightLog = /* GraphQL */ `
  mutation UpdateFlightLog(
    $input: UpdateFlightLogInput!
    $condition: ModelFlightLogConditionInput
  ) {
    updateFlightLog(input: $input, condition: $condition) {
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
export const deleteFlightLog = /* GraphQL */ `
  mutation DeleteFlightLog(
    $input: DeleteFlightLogInput!
    $condition: ModelFlightLogConditionInput
  ) {
    deleteFlightLog(input: $input, condition: $condition) {
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
