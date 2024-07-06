import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'

const  appStore = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default appStore