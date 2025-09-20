import { configureStore } from '@reduxjs/toolkit'; // ✅ Correct import
import fetchReducer from './fetchSlice';

export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});