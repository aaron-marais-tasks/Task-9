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
export default class Card extends React.Component {
    // Get our context
    static contextType = CardContext

    // Initial state
    state = {
        selected: false,
        hidden: true
    }

    // On click handler
    onClick = () => {
        // Don't allow play if played already
        if(this.context.played) return

        // Play the card into parent
        this.context.play(this.props.number)

        // Set selected to true
        this.setState({
            selected: true
        })

        // After .5s, unhide color
        setTimeout(() => {
            this.setState({
                hidden: false
            })
        }, 500)
    }

    // If component updated
    componentDidUpdate(prevProps, prevState) {
        // If both previous and current state is selected, and resetting cards
        if(prevState.selected && this.state.selected && this.context.reset) {
            // Unselect card and hide color
            this.setState({
                selected: false,
                hidden: true
            })
        }
    }

    render() {
        if(this.state.selected) {
            if(!this.state.hidden) {
                // If selected, and result is not hidden, and is a winner, return a card with a green background
                if(this.context.winner === this.props.number)
                    return <SelectedCard color="green" />
                // If selected, and result is not hidden, and is a loser, return a card with a red background
                else
                    return <SelectedCard color="red" />
            }

            // If selected, but is hidden, return a blank card
            return <SelectedCard />
        }

        // If not selected, return a default card
        return <CardContainer onClick={this.onClick} />
    }
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
