// Compoment to display the rules of the game. This is being called from the Header compoment.

/* Requirement Statement: 
   - The user should easily be able to request “help” that will inform the user about the rules of the game from the UI.
*/

const Rules = () => {
    return <div>
        <h4>How to Play:</h4>
        <div className="rules-list">
            <ol>
                <li>Click 'Start Game'.</li>
                <li>You have 10 chances to guess the right word.</li>
                <li>Number of blank spaces represent number of letters in the secret word.</li>
                <li>Start guessing the word by clicking on a letter.</li>
                <li>If your guess is correct, the letter is revealed.</li>
                <li>If your guess is incorrect, you lose a chance.</li>
                <li>You win when you get every letter of the word before hangman drawing finishes.</li>
                <li>You lose if you guess 10 incorrect letters.</li>
                <li>Click 'I Know Rules' to hide this section.</li>
            </ol>
        </div>
    </div>;
};

export default Rules;
