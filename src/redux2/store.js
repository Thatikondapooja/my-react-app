// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReduser from './fetchSlice';
// import addUser from './fetchSlice';
export const store = configureStore({
  reducer: {
    user: userReduser, 
  },
});
