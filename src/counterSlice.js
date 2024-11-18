import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0,
    name:"Monish Kumar B",
    email:"monishkumar4050@gmail.com",
    imageUrl:"https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1603315211843-NOJ0JY8WNGQB58VJ1A3M/image-asset.jpeg?format=1500w",
    clock_list_back:["","book1_clock.png","python.png","","","morning-routine.png","gym_clock.png","","startup-logo1.png","leetcode_clock.png","","meeting_clock.png"],
    modelCustom:false
  },
  reducers: {
    changeCustomOpen:(state,action)=>{
      state.modelCustom=true
    },
    changeCustomClose:(state,action)=>{
      state.modelCustom=false
    },
    changeClockList:(state,action)=>{
         state.clock_list_back[action.payload[0]]=action.payload[1]
    },
    changeLogin:(state,action)=>{
        state.name=action.payload.name;
        state.email=action.payload.email;
        state.photoURL=action.payload.photoURL;
    },    
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount,changeLogin,changeClockList,changeCustomOpen,changeCustomClose } = counterSlice.actions

export default counterSlice.reducer