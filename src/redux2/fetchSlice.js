import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  quotes: []
};

const fetchSlice = createSlice({
  name: 'user',
  initialState ,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      console.log("addToRedux", state.users);
    },
    addUsers: (state, action) => {
      state.users.push(...action.payload);
      console.log("addUsersdata", state.users);
    },
    removeUser: (state) => {
      state.users.pop();
      console.log("User removed", state.users);
    },
    fetchQuotations: (state, action) => {
      state.quotes = action.payload;
      console.log("quotes From Redux", state.quotes);
    },
  },
});

export const { addUser, addUsers, removeUser, fetchQuotations } = fetchSlice.actions;
export default fetchSlice.reducer;
