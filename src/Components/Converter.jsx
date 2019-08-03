/*
	This file holds our converter logic
*/

// Import React into scope
import React from "react"

// Convert component
export default class extends React.Component {
	// Initial state
	state = {
		audAmount: 0
	}

	render() {
		return (
			// div.converter container
			<div className="converter">
				{/* Input dollar amount */}
				Australian Dollar Amount:

				{/* onChange for input element; sets component state to parsed amount or 0 (if NaN) */}
				<input type="number" 
					onChange={e => this.setState({audAmount: parseInt(e.target.value) || 0})} /><br/>

				{/* Converting to ZAR, GBP and EUR (rates as of 03/08/2019) */}
				South African Rands: <span>{this.state.audAmount * 10.06}</span><br/>
				Great British Pound: <span>{this.state.audAmount * 0.56}</span><br/>
				Euro: <span>{this.state.audAmount * 0.61}</span>
			</div>
		)
	}
}