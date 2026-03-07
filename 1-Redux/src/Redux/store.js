import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./features/counterSlice"
//As we did default export of counterSlicer.reducer that's why we imported here that with name counterReducer


export const store = configureStore({
  reducer:{
  counter:counterReducer
  }
})


// 📀 Add these line also if we are typescript means if the file is like store.ts then
//export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch






