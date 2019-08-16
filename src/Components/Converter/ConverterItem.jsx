/*
    This file holds my converter items
*/

// Import React into scopes
import React from "react"

// Import styled elements
import ConverterItem from "../StyledComponents/ConverterItem.jsx"

// Create item context
const ItemContext = React.createContext({})

// Export provider and (optional use) consumer
export const ItemProvider = ItemContext.Provider
export const ItemConsumer = ItemContext.Consumer

// Item component
export default function Item(props) {
    const context = React.useContext(ItemContext)

    // Calculate amount based on context
    // First try to convert to float (int strips after dot)
    let currentInAud = parseFloat(context.amount)

    // If is not a number, try and convert to integer
    if(Number.isNaN(currentInAud))
        currentInAud = parseInt(context.amount)

    // If still not a number, set to zero
    if(Number.isNaN(currentInAud))
        currentInAud = 0

    // Calculate and return converted amount
    const total = currentInAud * props.factor

    return (
        // Div to hold item
        <ConverterItem>
            {/* Item title */}
            <span className="title">
                {props.title}
            </span>

            {/* Converted amount */}
            <span className="amount">
                {props.symbol + " " + total.toFixed(2)}
            </span>
        </ConverterItem>
    )
}
