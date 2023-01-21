// Header component that also contains 'Help' button. A user can toggle between displaying the rules or hiding it.

/* Requirement Statement: 
   - The user should easily be able to request “help” that will inform the user about the rules of the game from the UI.
*/

import { useState } from "react";
import Rules from "./Rules";

const Header = () => {
    // using useState hook to store a flag to show/hide rules
    const [showRules, setShowRules] = useState(true)

    const displayRules = () => {
        setShowRules(!showRules)
    }
    return <div>
        <header className="header-container">
            <h1>Hangman</h1>
            <button className="btn" onClick={displayRules}>{showRules ? 'Hide Rules' : 'Help'}</button>
        </header>
        {showRules && <Rules />}
    </div>

};

export default Header;
