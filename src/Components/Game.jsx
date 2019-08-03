/*
    This file holds my card game
*/

// Import React into scope
import React from "react"

// Convert component
export default class Game extends React.Component {
	// Function to generate cards with random numbers
	generateCards() {
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
				<div key={i}
					className={"card" + (
						this.state.selectedCard === i ? (
							" selected" + (this.state.unHidden ? (
								this.state.winningCard === i ? " winner" : " loser"
							) : "")
						) : ""
					)} onClick={this.onClick(i)} />
			)
		}

		// Return elements
		return items
	}

	// Initial state
	state = {
		winningCard: Math.floor(Math.random() * 3) + 1,
		selectedCard: 0,
		unHidden: false,
		showWinState: false
	}

	// onClick handler
	onClick = cardNumber => () => {
		// If a card's been selected, stop execution
		if(this.state.selectedCard > 0) return

		// Set the current state's selectedCard variable to the card number
		this.setState({ selectedCard : cardNumber })

		// After .5s, set the unHidden state variable to true
		setTimeout(() => {
			this.setState({ unHidden : true })
		}, 500)

		// After 1.5s, set the showWinState to true
		setTimeout(() => {
			this.setState({ showWinState : true })
		}, 1500)
	}

	render() {
		return (
			// Render our div.game container
			<div className="game">
				{/* Generate our 3 cards */}
				{this.generateCards()}

				{/* Generate the win status. Only show when showWinState is set to true */}
				<div className={"status" + (this.state.showWinState ? "" : " hidden")}>
					{/* Our div.class holds information on if user is winner or loser */}
					<div class="text">{this.state.selectedCard === this.state.winningCard ? "Winner!" : "Loser!"}</div>

					{/* Button for Try Again. When clicked, resets state */}
					<button onClick={() => this.setState({
							winningCard: Math.floor(Math.random() * 3) + 1,
							selectedCard: 0,
							unHidden: false,
							showWinState: false
						})}
					>
						Try Again
					</button>

					{/* Button to quit. Goes to Google. */}
					<button onClick={() => window.location = "https://google.com/search?q=other+card+games"}>
						Quit
					</button>
				</div>
			</div>
		)
	}
}
