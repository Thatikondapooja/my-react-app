import { createSlice } from "@reduxjs/toolkit"
const counterSlice =createSlice({
 name:'counter',
 initialState:{value: 0},
 reducers:{
    increment:(state)=>{state.value=state.value+1;},
    decrement:(state)=>{state.value-=1;},
    multiple:(state)=>{state.value*=2;},
    dividing:(state)=>{state.value/=2;},
    incrementBy:(state,action)=>{state.value+=action.payload;},
    decrementBy:(state,action)=>{state.value-=action.payload;}
 
 },
});

export const{increment,decrement,multiple,dividing,incrementBy,decrementBy}=counterSlice.actions;
export default counterSlice.reducer;