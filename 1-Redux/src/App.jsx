import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}>
        Decrement
      </button>

    <input 
     value={num}
     type="number"
     onChange={(e) => {
      setNum(e.target.value)
     }} 
    />
    //Humne useState ka use sirf input box ke liye kiya hai .

      <button onClick={()=>{
        dispatch(incrementByAmount(Number(num)))
      }}>
        Increment by Amount
      </button>
      
    </div>
  )
}

export default App

//-----------------------------------------------------------------------------------
//Sabse pehle humne install kiya redux ko "npm install @reduxjs/toolkit react-redux"
//Uske baad humne ek folder banaya jiska name "Redux" rakha and uske andar humne ek redux store banane ke liye store.js karke ek file banayi.
//In that store.js file (actually we make store.ts but because we want to understand that is the reason we just used store.js)
//import {configureStore} from '@reduxjs/toolkit' Humne store banane ke liye import kiya us store.js me 
//const store = configureStore{} then store bana diya and put down a Reducer named object in it like this Reducer:{}, yeh reducer wo sabhi reducers wo stored rakhta hai jo hum banate hai slice banane ke dooraan and then exported it .
//After this we wrapped the <App> so that <App> ke andar bane hue sabhi elements make a persistent connection through <Provider> and in provider tell the database which is "store" in main.jsx.
////Uske baad humne ek Slice banayi 
//Sabse pehle import kiya import { createSlice } from "@reduxjs/toolkit"; and then created "const counterSlice = createSlice()"
//In createSlice() it accepts a object which contains three things -> Name of Slice , initialState , reducers
//After that , we exported "const counterSlice" , counterSlice.actions ,counterSlice.reducer. 
//After that we imported this counterslice in store.js like "import counterReducer from './features/counterSlice'" and put the reducer in the store reducer collection like this "Reducer:{counter:counterReducer}" . hum jitne bhi reducers banate hai sabko store ke reducer collection me ese daalte hai. 
//Now our store is ready , and we created a reducer for a work in it .
//Now after this -- we start to use in our App.jsx
//import { useDispatch, useSelector } from 'react-redux'
//import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'
//We imported useDispatch and useSelector .
//useDispatch() → Redux ko action bhejne ke liye ki like yeh kar do , ya yeh function run kar do yeh bola.
//useSelector() → Redux store se data read karne ke liye yaani data jo humne ek state me rakha hai like InitialStage usse use karne ke liye .
//Humne useDispatch() ko ek variable me store kar diya "dispatch"
//And Humne useSelector ko bhi store kar diya ek variable me { const count = useSelector((state) => state.counter.value) }
//And then used it to make it , just read the logic now written in App.jsx . That's it 
//-----------------------------------------------------------------------------------------


