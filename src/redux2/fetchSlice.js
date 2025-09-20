import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  quotes: []
};

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUsers: (state, action) => {
      state.users.push(...action.payload);
    },
    removeUser: (state) => {
      state.users.pop();
    },
    fetchQuotations: (state, action) => {
      state.quotes.push(...action.payload);
    },
  },
});

export const { addUser, addUsers, removeUser, fetchQuotations } = fetchSlice.actions;
export default fetchSlice.reducer;