// This is main component containing logic around evaluating user's response and declaring results.

/* Requirement Statement: 
   - A number of components should be rendered using the array.Map()method. 
   - User interaction should modify the state of some components.
   - The user should be able to restart the game.
*/

// Importing the useSelector and useDispatch functions to select the required slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our word reducer.
import { getNewWord, increaseCount, initialiseCount, setResult } from "../features/wordSlice";

import { useState } from 'react';
import Alphabet from "./Alphabet";
import DisplayImages from "./DisplayImages";
import Results from './Results'

const Body = () => {

    // ======================================== defining state variables =========================================

    // The useSelector function allows us to find the needed slices of state (from store). It takes a function as an argument.
    const word = useSelector((state) => state.word.newWord);

    // using useState hook to store responses for correct (correctAns)
    const [correctAns, setCorrectAns] = useState([])

    // The useDispatch function will dispatch all the necessary actions to the reducer to enable us to modify the state. 
    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();

    console.log("word", word);                  // in case you want to cheat :)

    // ======================================== defining functions =========================================

    // Start the game when 'Start Game' button is clicked. Initialize all the variables.
    const startGame = () => {
        dispatch(initialiseCount())
        dispatch(getNewWord())
        setCorrectAns([])
        dispatch(setResult(''))

        // Enable alphabet buttons
        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = false
            btn.className = 'button'
        })
    }

    // Evaluate if the selected alphabet is a right answer or not
    const evaluateResponse = (alphabet) => {
        let btn = document.getElementById(alphabet)
        if (word.includes(alphabet)) {
            btn.className = "button-green"
            setCorrectAns([...correctAns, alphabet])        // add to correctAns array
        }
        else {
            btn.className = "button-red"
            dispatch(increaseCount())                       // increase the counter, that in turn will change the hangman image
        }
    }

    // Disable all buttons if the player either wins or loses
    const disableButtons = () => {
        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = true
            btn.className = 'button-grey'
        })
    }

    // ======================================  managing results ================================
    // Following code will be executed every time this page is rendered

    // Create an array of alphabets. This is used to creat alphabet buttons by calling 'Alphabet' component
    let alphabets = []
    for (let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i)
        alphabets.push(char)
    }

    // Hide the word with '_' and display letters that are correct answers.
    const guessWord = word.split('').map(char => correctAns.includes(char) ? char : '_').join(" ")

    // check if all the correct alphabets are found. If yes, user wins
    if ((!(guessWord.includes("_"))) && (word !== '')) {
        dispatch(setResult(1))                                  // update slices of state with result
        disableButtons()
    }

    // ============================================ returning  HTML ==========================================

    return <div >
        {word && <Results />}
        {word && <div className='state-container'>
            <DisplayImages disableButtons={disableButtons} />
            <p className='state-dash'>{guessWord}</p>
        </div>}
        <button className='btn' onClick={startGame}>Start Game</button>
        {word && <div className='alpha-container'>
            {alphabets.map((alphabet, index) =>
                <Alphabet key={index} alphabet={alphabet} evaluateResponse={evaluateResponse} />
            )}
        </div>}
    </div>;
};

export default Body;
