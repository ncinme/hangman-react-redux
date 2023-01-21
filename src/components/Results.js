// Component to display results. This is being called from the Body compoment.

/* Requirement Statement: 
   - The user should be clearly informed if they have “won” or “lost” the game
      - The state of two or more components should be synced.
Note: We could have passed 'result' as a prop from Body component as well.
*/

// // Importing the useSelector function to select the required slices of state.
import { useSelector, } from "react-redux";

const Results = () => {
    // get value of the 'result' from the slices of state
    const result = useSelector((state) => state.word.result);

    return <div className="results-container">
        <p>Result: {result}</p>
    </div>;
};

export default Results;
