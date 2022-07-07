import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cognitoSlice } from '../features/cognitoSlice';
import commentModalReducer from '../features/commentModalSlice';

const store = configureStore({
  reducer: {
    cognitoIdentity: cognitoSlice.reducer,
    commentModal: commentModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
