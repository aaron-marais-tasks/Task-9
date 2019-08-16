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
    // Our component context type
    static contextType = ItemContext

    // Calculate amount based on context
    getTotalAmount = () => {
        // First try to convert to float (int strips after dot)
        let currentInAud = parseFloat(this.context.amount)

        // If is not a number, try and convert to integer
        if(Number.isNaN(currentInAud))
            currentInAud = parseInt(this.context.amount)

        // If still not a number, set to zero
        if(Number.isNaN(currentInAud))
            currentInAud = 0

        // Calculate and return converted amount
        return currentInAud * this.props.factor
    }

    render() {
        return (
            // Div to hold item
            <div className="item">
                {/* Item title */}
                <span className="title">
                    {this.props.title}
                </span>

                {/* Converted amount */}
                <span className="amount">
                    {this.getTotalAmount().toFixed(2)}
                </span>
            </div>
        )
    }
}
