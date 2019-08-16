/*
    This file holds my card game
*/

// Import React into scope
import React from "react"

// Import game body's styling
import GameBody from "../StyledComponents/Game.jsx"

// Import card generator and context, and endscreen context
import {Generate as GenerateCards, CardProvider} from "./GameCard.jsx"
import EndScreen, {Context as EndScreenContext} from "./GameEndScreen.jsx"

// Convert component
export default function Game() {
    // Initial state
    const [winner, setWinner] = React.useState(Math.floor(Math.random() * 3) + 1)
    const [selected, selectCard] = React.useState(0)
    const [displayStatus, setDisplayStatus] = React.useState(false)
    const [resetCards, setReset] = React.useState(false)


    // Reset game
    const reset = () => {
        setWinner(Math.floor(Math.random() * 3) + 1)
        selectCard(0)
        setDisplayStatus(false)
        setReset(true)
    }

    React.useEffect(() => {
        if(resetCards) {
            setReset(false)
        }
    }, [resetCards])

    // Card component context
    const cardContext = {
        // Winning card
        winner,

        // If resetting
        reset: resetCards,

        // If played
        played: selected > 0,

        // Play the card into parent
        // Takes card number as argument
        play: number => {
            // Set selected card to number of card
            selectCard(number)

            // After 1.5s, set the showWinState to true
            setTimeout(() => {
                setDisplayStatus(true)
            }, 1500)
        }
    }

    // End screen component context
    const endScreenContextValue = {
        // Selected card
        selected,

        // Winning card
        winner
    }

    return (
        // Render our div.game container
        <GameBody>
            {/* Generate our 3 cards */}
            <CardProvider value={cardContext}>
                {GenerateCards(3)}
            </CardProvider>

            {/* Generate end screen */}
            <EndScreenContext.Provider value={endScreenContextValue}>
                <EndScreen show={displayStatus} reset={reset} />
            </EndScreenContext.Provider>
        </GameBody>
    )
}
