import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:"counter",
  initialState:{
    value:0
  },
  reducers:{
    increment:(state)=>{
    state.value += 1
    },
    decrement:(state)=>{
      state.value -= 1
    },
    incrementByAmount:(state,actions)=>{
    state.value += actions.payload
    } //THESE FUNCTION CAN TAKE TWO PARAMETERS one is "state" and 2nd is "action" . State ke andar hum jo Initial Stage me jitne bhi key-value daalte hai wo is "state" se access kar sakte hai and "action" ek object hota hai jiske action.payload me wo parameter hota hai jisse hum is function ko call karte hai like we called with "num".
  }
})
export const{increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer //REDUCERS EXPORTED