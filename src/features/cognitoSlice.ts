import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICognitoData } from '../app/CognitoIdentityTypes';

interface CognitoState {
  cognito: ICognitoData;
}

const initialState: CognitoState = {
  cognito: {
    groups: [],
  },
};

/* eslint-disable no-param-reassign */
export const cognitoSlice = createSlice({
  name: 'cognitoIdentity',
  initialState,
  reducers: {
    setCognitoIdentity: (state, action: PayloadAction<ICognitoData>) => {
      console.log('setCognitoIdentity()', action);
      state.cognito = action.payload;
    },
    clearCognitoIdentity: state => {
      console.log('clearCognitoIdentity()');
      state.cognito = initialState.cognito;
    },
  },
});

export const { setCognitoIdentity, clearCognitoIdentity } = cognitoSlice.actions;
