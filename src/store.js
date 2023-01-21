// for the 'store' to access the reducer and the actions applicable to the of the state, importing the reducer from wordSlice.js
import { configureStore } from "@reduxjs/toolkit"
import wordReducer from "./features/wordSlice"

// adding the wordSlice reducer to the store
export default configureStore({
    reducer: {
        word: wordReducer
    }
})