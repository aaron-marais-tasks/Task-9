/*
	This file holds the game end screen conditions
*/

// Import React into scope
import React from "react"

// Create screen context
const ScreenContext = React.createContext({})

// Export provider and (optional use) consumer
export const EndScreenProvider = ScreenContext.Provider
export const EndScreenConsumer = ScreenContext.Consumer

// Generate the win status. Only show when showWinState is set to true
export default class EndScreen extends React.Component {
	static contextType = ScreenContext

	// Class name for div
	getClassName = () => {
		// Base class name
		let className = "status"

		// Add the hidden class if not shown
		if(!this.props.show)
			className += " hidden"

		return className
	}

	// Get text if won or lost
	getWinText = () => {
		// If selected card is winning card, return winner
		if(this.context.selected === this.context.winner)
			return "Winner!"

		return "Loser!"
	}

	render() {
		return (
			<div className={this.getClassName()}>
				{/* Our div.class holds information on if user is winner or loser */}
				<div className="text">{this.getWinText()}</div>

				{/* Button for Try Again. When clicked, resets game */}
				<button onClick={this.props.reset}>
					Try Again
				</button>

				{/* Button to quit. Goes to Google. */}
				<button onClick={() => window.location = "https://google.com/search?q=other+card+games"}>
					Quit
				</button>
			</div>
		)
	}
}
