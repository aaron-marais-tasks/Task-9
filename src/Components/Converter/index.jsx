/*
    This file holds our converter logic
*/

// Import React into scope
import React from "react"

// Import our styled component
import ConverterContainer from "../StyledComponents/Converter.jsx"

// Import styled item
import ConverterItem from "../StyledComponents/ConverterItem.jsx"

// Import our item component and its context
import Item, { ItemProvider } from "./ConverterItem.jsx"

// Convert component
export default function Converter(props) {
    // Initial state
    const [audAmount, setAudAmount] = React.useState("")

    return (
        // Converter container
        <ConverterContainer>
            <ConverterItem>
                {/* Input dollar amount */}
                <span className="title">Australian Dollar Amount:</span>

                {/* onChange for input element; sets component state to parsed amount or 0 (if NaN) */}
                <input type="number" onChange={e => setAudAmount(e.target.value)} />
            </ConverterItem>

            {/* Our items' context provider */}
            <ItemProvider value={{amount: audAmount}}>
                {/* Converting to ZAR, GBP and EUR (rates as of 03/08/2019) */}
                <Item symbol="R" title="South African Rands" factor={10.06} />
                <Item symbol="£" title="Great British Pound" factor={0.56} />
                <Item symbol="€" title="Euro" factor={0.61} />
            </ItemProvider>
        </ConverterContainer>
    )
}
