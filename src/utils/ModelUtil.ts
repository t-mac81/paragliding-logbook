/* eslint-disable @typescript-eslint/no-unused-vars */

import { restaurant } from "ionicons/icons";

// function used for removing extra crap from the data object
export const scrubData = (dataObject: any) => {
  const {
    __typename,
    createdAt,
    updatedAt,
    _version,
    _deleted,
    _lastChangedAt,
    owner,
    ...rest
  } = dataObject;

  return rest;
}