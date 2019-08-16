/*
  This file holds my main application logic
*/

// Import React into scope
import React from 'react';

// Import Converter and Game components
import Converter from "./Components/Converter.jsx"
import Game from "./Components/Game.jsx"

// App component
class App extends React.Component {
  // Set initial state
  state = {
    current: "convert"
  }

  render() {
    return (
      // Render with react fragment
      <React.Fragment>
        {/* Selectbox which updates state when changed */}
        <select onChange={e => this.setState({current: e.target.value})}>
          <option value="convert">Currency converter</option>
          <option value="win">Win</option>
        </select>

        {/* Immediate-invoked method that contains a switch to render components */}
        {(() => {
          switch(this.state.current) {
            case "convert": return <Converter />
            case "win": return <Game />
            default: {}
          }
        })()}
      </React.Fragment>
    )
  }
}

export default App;
