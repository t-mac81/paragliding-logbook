import { createSlice } from '@reduxjs/toolkit';

// export interface ModalState {
//   isOpen: boolean;
//   commentModal: boolean;
// }

const initialState = {
  isOpen: false,
};

/* eslint-disable no-param-reassign */
const commentModalSlice = createSlice({
  name: 'commentModal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = commentModalSlice.actions;
export default commentModalSlice.reducer;
