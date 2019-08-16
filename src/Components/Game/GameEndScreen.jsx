/*
    This file holds the game end screen conditions
*/

// Import React into scope
import React from "react"

// Import our styled elements
import EndScreenContainer from "../StyledComponents/GameEndScreen.jsx"

// Create screen context
export const Context = React.createContext({})

// Generate the win status. Only show when showWinState is set to true
export default function EndScreen(props) {
    const context = React.useContext(Context)

    // If not shown, return null
    if(!props.show) return null

    // Get text if won or lost
    const getWinText = context.selected === context.winner ? "Winner!" : "Loser!"
    const goHome = () => window.location = "https://google.com/search?q=other+card+games"

    return (
        <EndScreenContainer>
            {/* Our div.winText holds information on if user is winner or loser */}
            <div className="winText">{getWinText}</div>

            {/* Button for Try Again. When clicked, resets game */}
            <button onClick={props.reset}>
                Try Again
            </button>

            {/* Button to quit. Goes to Google. */}
            <button onClick={goHome}>
                Quit
            </button>
        </EndScreenContainer>
    )
}
