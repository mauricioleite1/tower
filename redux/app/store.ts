import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../userSlice';
import bungieDataReducer from '../bungieDataSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    bungieData: bungieDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
