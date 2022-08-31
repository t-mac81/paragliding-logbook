import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasProfile: false,
};

/* eslint-disable no-param-reassign */
const hasProfileSlice = createSlice({
  name: 'hasProfileState',
  initialState,
  reducers: {
    isProfile: state => {
      state.hasProfile = true;
    },
    noProfile: state => {
      state.hasProfile = false;
    },
  },
});

export const { isProfile, noProfile } = hasProfileSlice.actions;
export default hasProfileSlice.reducer;
