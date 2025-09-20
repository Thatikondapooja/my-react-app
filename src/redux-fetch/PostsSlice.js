import { createSlice } from "@reduxjs/toolkit"
const initialState={
    posts:[],
   
};

const PostSlice = createSlice({
 name:'post',
 initialState,
 reducers:{
 addposts:(state, action)=>{
   state.posts=(action.payload); 
   console.log("add to store",  state.posts)
 }, 
removePost:(state, action)=>{
    state.posts.pop(action.payload)
       console.log("remove to store",  state.posts)

}
 },

});

export const {addposts,removePost}=PostSlice.actions;
export default PostSlice.reducer;