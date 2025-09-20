// redux2/store.js
import { configureStore } from "@reduxjs/toolkit";
import postReducer from './PostsSlice';

export const store = configureStore({
  reducer: {           
    post: postReducer,
  },
});
