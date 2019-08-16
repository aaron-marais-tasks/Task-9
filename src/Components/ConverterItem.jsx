/*
	This file holds my converter items
*/

// Import React into scopes
import React from "react"

// Create item context
const ItemContext = React.createContext({})

// Export provider and (optional use) consumer
export const ItemProvider = ItemContext.Provider
export const ItemConsumer = ItemContext.Consumer

// Item component
export default class Item extends React.Component {
	static contextType = ItemContext

	getTotalAmount = () => {
		let currentInAud = parseFloat(this.context.amount)

		if(Number.isNaN(currentInAud))
			currentInAud = parseInt(this.context.amount)

		if(Number.isNaN(currentInAud))
			currentInAud = 0

		return currentInAud * this.props.factor
	}

	render() {
		return (
			<div className="item">
				<span className="title">
					{this.props.title}
				</span>
				<span className="amount">
					{this.getTotalAmount().toFixed(2)}
				</span>
			</div>
		)
	}
}