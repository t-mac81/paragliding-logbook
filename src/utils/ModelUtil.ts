/* eslint-disable @typescript-eslint/no-unused-vars */

// function used for removing extra crap from the data object
const scrubData = (dataObject: any) => {
  const {
    __typename,
    createdAt,
    updatedAt,
    _deleted,
    _lastChangedAt,
    owner,
    ...rest
  } = dataObject;

  return rest;
};

export default scrubData;
