/*
	This file holds our card game's card component, context and generator
*/

// Import React into scope
import React from "react"

// Create card context
const CardContext = React.createContext({})

// Export provider and (optional use) consumer
export const CardProvider = CardContext.Provider
export const CardConsumer = CardContext.Consumer

// Card component
export class Card extends React.Component {
	// Get our context
	static contextType = CardContext

	// Initial state
	state = {
		selected: false,
		hidden: true
	}

	// Generator for class names based on context
	get classNames() {
		// Base class
		let className = "card"

		// If current card is selected
		if(this.state.selected) {
			// Add "selected" class name
			className += " selected"

			// Once card is unhidden
			if(!this.state.hidden) {
				// If winning card, add winner class, else add loser card
				className += this.context.winner === this.props.number ? " winner" : " loser"
			}
		}

		// Return class list
		return className
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
		return (
			// Inline div with onclick handler
			<div className={this.classNames} onClick={this.onClick} />
		)
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
			// Div element with class "card"; if selected, adds "selected" class; if selected
			// and winner, adds "winner" class if winning card, else "loser" class if losing
			// card. Losing or winning card only displayed when "unHidden" state variable
			// is set (from onClick event setTimeout@500)
			<Card key={i} number={i} />
		)
	}

	// Return elements
	return items
}
