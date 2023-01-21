/* Requirement Statement:
    ● User interaction should modify the state of some components.
    ● The state of two or more components should be synced.
*/

import { createSlice } from "@reduxjs/toolkit"
import wordList from '../wordList'

// wordSlice - is the name of the slice of state that we will implement in our store.
export const wordSlice = createSlice({
    name: 'word',
    // the initial state for the slice of state. 
    initialState: {
        'newWord': '',
        'count': 0,
        'result': '',
    },
    // The reducer to manipulate the initial state or current state.
    reducers: {
        // Get a new word from the word list.
        getNewWord: (state) => {
            let newWord = wordList[Math.floor(Math.random() * wordList.length)];
            newWord = newWord.trim().toUpperCase()
            state.newWord = newWord
        },

        // increase the counter by 1
        increaseCount: (state) => {
            state.count += 1
        },

        // initialise count to zero
        initialiseCount: (state) => {
            state.count = 0
        },

        // set result message
        setResult: (state, action) => {
            switch (action.payload) {
                case 0:
                    state.result = `You Lose!! The correct word is ${state.newWord}`
                    break;
                case 1:
                    state.result = 'You Win!!'
                    break;
                default:
                    state.result = ''
                    break;
            }
        },
    },
})

// Generating action creators for each case reducer function.
export const { getNewWord, increaseCount, initialiseCount, setResult } = wordSlice.actions

// Exporting the reducer function that will be implemented in the 'store'.
export default wordSlice.reducer