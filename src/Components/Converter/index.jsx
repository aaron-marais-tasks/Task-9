/*
    This file holds our converter logic
*/

// Import React into scope
import React from "react"

// Import our styled component
import ConverterContainer from "../StyledComponents/Converter.jsx"

// Import our item component and its context
import Item, { ItemProvider } from "./ConverterItem.jsx"

// Convert component
export default class extends React.Component {
    // Initial state
    state = {
        audAmount: 0
    }

    // Set our item's context
    getItemContext = () => ({
        amount: this.state.audAmount
    })

    render() {
        return (
            // Converter container
            <ConverterContainer>
                {/* Input dollar amount */}
                Australian Dollar Amount:

                {/* onChange for input element; sets component state to parsed amount or 0 (if NaN) */}
                <input type="number" 
                    onChange={e => this.setState({audAmount: e.target.value})} /><br/>

                {/* Our items' context provider */}
                <ItemProvider value={this.getItemContext()}>
                    {/* Converting to ZAR, GBP and EUR (rates as of 03/08/2019) */}
                    <Item symbol="R" title="South African Rands" factor={10.06} />
                    <Item symbol="£" title="Great British Pound" factor={0.56} />
                    <Item symbol="€" title="Euro" factor={0.61} />
                </ItemProvider>
            </ConverterContainer>
        )
    }
}
