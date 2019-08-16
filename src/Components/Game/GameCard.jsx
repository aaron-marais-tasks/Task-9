/*
    This file holds our card game's card component, context and generator
*/

// Import React into scope
import React from "react"

// Import our styled components
import CardContainer, {Selected as SelectedCard} from "../StyledComponents/GameCard.jsx"

// Create card context
const CardContext = React.createContext({})

// Export provider and (optional use) consumer
export const CardProvider = CardContext.Provider
export const CardConsumer = CardContext.Consumer

// Card component
export default function Card(props) {
    // Get our context
    const context = React.useContext(CardContext)

    // Initial state
    const [selected, setSelected] = React.useState(false)
    const [hidden, setHidden] = React.useState(true)

    // If component updated
    React.useEffect(() => {
        // If both previous and current state is selected, and resetting cards
        if(context.reset) {
            // Unselect card and hide color
            setSelected(false)
            setHidden(true)
        }
    }, [context.reset])

    if(selected) {
        if(!hidden) {
            // If selected, and result is not hidden, and is a winner, return a card with a green background
            if(context.winner === props.number)
                return <SelectedCard color="green" />
            // If selected, and result is not hidden, and is a loser, return a card with a red background
            else
                return <SelectedCard color="red" />
        }

        // If selected, but is hidden, return a blank card
        return <SelectedCard />
    }

    // If not selected, return a default card
    return <CardContainer onClick={() => {
        // Don't allow play if played already
        if(context.played) return

        // Play the card into parent
        context.play(props.number)

        // Set selected to true
        setSelected(true)

        // After .5s, unhide color
        setTimeout(() => {
            setHidden(false)
        }, 500)
    }} />
}

// Function to generate cards with random numbers
export function Generate(count) {
    // Temporay array
    const items = []

    // Loop 3 times
    for(let i = 0; i++ < 3;) {
        // Insert element into list
        items.push(
            // Our card element
            <Card key={i} number={i} />
        )
    }

    // Return elements
    return items
}
