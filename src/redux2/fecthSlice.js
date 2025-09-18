
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    users:[],
quotes:[],

};
   
const FetchUserDetails=createSlice({
    name:'fetch',
    initialState,
    reducers:{
    addUser:function(state,action){
    state.users=action.payload
    console.log("addToRedux", state.users)
 },
  removeUser:function(state,action){
    console.log( state.users.pop(action.payload))
 },
 addUsers:function(state,action){
state.users=action.payload
console.log("addUsersdata",state.users)
 },

 fetchQuotations:function(state,action){
state.quotes=action.payload
console.log("quotes From Redux",state.quotes)
 },
    }
})


export const {addUser,removeUser,addUsers,fetchQuotations}= FetchUserDetails.actions
export default FetchUserDetails.reducer;

