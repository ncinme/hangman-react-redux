// Component to display progressive hangman's images for every incorrect output. This is being called from the Body compoment.

/* Requirement Statement: 
   - The state of two or more components should be synced.
Note: We could have passed 'count' as a prop from Body component as well.
*/

// Importing the useSelector function to select the required slices of state.
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../features/wordSlice";

// importing images representing various states of Hangman drawing.
import state1 from '../images/state1.GIF'
import state2 from '../images/state2.GIF'
import state3 from '../images/state3.GIF'
import state4 from '../images/state4.GIF'
import state5 from '../images/state5.GIF'
import state6 from '../images/state6.GIF'
import state7 from '../images/state7.GIF'
import state8 from '../images/state8.GIF'
import state9 from '../images/state9.GIF'
import state10 from '../images/state10.gif'
import state11 from '../images/state11.GIF'

const DisplayImages = ({ disableButtons }) => {

    // get value of the count from the slices of state
    const count = useSelector((state) => state.word.count)
    const dispatch = useDispatch()

    let img = document.getElementById('state-img')

    if (img) {
        switch (count) {
            case 0:
                img.src = state1
                break;
            case 1:
                img.src = state2
                break;
            case 2:
                img.src = state3
                break;
            case 3:
                img.src = state4
                break;
            case 4:
                img.src = state5
                break;
            case 5:
                img.src = state6
                break;
            case 6:
                img.src = state7
                break;
            case 7:
                img.src = state8
                break;
            case 8:
                img.src = state9
                break;
            case 9:
                img.src = state10
                break;
            case 10:
                img.src = state11
                dispatch(setResult(0))          // update slices of state with result 
                disableButtons()                // Game over, and the user loses.
                break;
            default:
                img.src = state1
                break;
        }
    }

    return <div>
        <img className='state-img' id='state-img' src={state1} alt='state' />
    </div>;
};

export default DisplayImages;
