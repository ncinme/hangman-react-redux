/* Requirement Statement: Create a Hangman game using the Create React App Starter Kit.
   - The user should be able to start/restart the game.
   - The user should be clearly informed if they have “won” or “lost” the game.
   - The user should easily be able to request “help” that will inform the user about the rules of the game.
*/

import Body from "./components/Body";
import Header from "./components/Header";

function App() {

  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
