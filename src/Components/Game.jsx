/*
    This file holds my card game
*/

// Import React into scope
import React from "react"

// Import card generator and context, and endscreen context
import {Generate as GenerateCards, CardProvider} from "./GameCard.jsx"
import EndScreen, {EndScreenProvider} from "./GameEndScreen.jsx"

// Convert component
export default class Game extends React.Component {
	// Initial state
	state = {
		// The winning card
		winningCard: Math.floor(Math.random() * 3) + 1,

		// The currently selected card
		selectedCard: 0,

		// Whether to show winning screen
		showWinState: false,

		// Reset cards
		reset: false
	}

	// Play a card
	// Takes card number as argument
	playCard = number => {
		// Set selected card to number of card
		this.setState({
			selectedCard: number
		})

		// After 1.5s, set the showWinState to true
		setTimeout(() => {
			this.setState({ showWinState : true })
		}, 1500)
	}

	// Reset game
	reset = () => {
		this.setState({
			winningCard: Math.floor(Math.random() * 3) + 1,
			selectedCard: 0,
			unHidden: false,
			showWinState: false,

			// Toggle reset
			reset: true
		}, () => this.setState({
			// Toggle reset after initial reset
			reset: false
		}))
	}

	// Card component context
	getCardContext = () => ({
		// Winning card
		winner: this.state.winningCard,

		// If played
		played: this.selectedCard > 0,

		// Play the card into parent
		play: this.playCard,

		// If resetting
		reset: this.state.reset
	})

	// End screen component context
	getEndScreenContext = () => ({
		// Selected card
		selected: this.state.selectedCard,

		// Winning card
		winner: this.state.winningCard
	})

	render() {
		return (
			// Render our div.game container
			<div className="game">
				{/* Generate our 3 cards */}
				<CardProvider value={this.getCardContext()}>
					{GenerateCards(3)}
				</CardProvider>

				{/* Generate end screen */}
				<EndScreenProvider value={this.getEndScreenContext()}>
					<EndScreen show={this.state.showWinState} reset={this.reset} />
				</EndScreenProvider>
			</div>
		)
	}
}
