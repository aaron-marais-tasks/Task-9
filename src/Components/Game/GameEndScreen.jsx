/*
    This file holds the game end screen conditions
*/

// Import React into scope
import React from "react"

// Import our styled elements
import EndScreenContainer from "../StyledComponents/GameEndScreen.jsx"

// Create screen context
const ScreenContext = React.createContext({})

// Export provider and (optional use) consumer
export const EndScreenProvider = ScreenContext.Provider
export const EndScreenConsumer = ScreenContext.Consumer

// Generate the win status. Only show when showWinState is set to true
export default class EndScreen extends React.Component {
    // End screen context
    static contextType = ScreenContext

    // Get text if won or lost
    getWinText = () => {
        // If selected card is winning card, return winner
        if(this.context.selected === this.context.winner)
            return "Winner!"

        return "Loser!"
    }

    render() {
    	// If not shown, return null
    	if(!this.props.show) return null

        return (
            <EndScreenContainer>
                {/* Our div.winText holds information on if user is winner or loser */}
                <div className="winText">{this.getWinText()}</div>

                {/* Button for Try Again. When clicked, resets game */}
                <button onClick={this.props.reset}>
                    Try Again
                </button>

                {/* Button to quit. Goes to Google. */}
                <button onClick={() => window.location = "https://google.com/search?q=other+card+games"}>
                    Quit
                </button>
            </EndScreenContainer>
        )
    }
}
