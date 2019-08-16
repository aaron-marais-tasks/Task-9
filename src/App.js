/*
  This file holds my main application logic
*/

// Import React into scope
import React from 'react';

// Import Converter and Game components
import Converter from "./Components/Converter"
import Game from "./Components/Game"

// App component
function App() {
  // Set initial state
  const [current, setCurrent] = React.useState("convert")

  // Switch to render components
  let currentItem
  switch(current) {
    case "convert": currentItem = <Converter />; break
    case "win": currentItem = <Game />; break
    default: {}
  }

  return (
    // Render with react fragment
    <React.Fragment>
      {/* Selectbox which updates state when changed */}
      <select onChange={e => setCurrent(e.target.value)}>
        <option value="convert">Currency converter</option>
        <option value="win">Win</option>
      </select>

      {currentItem}
    </React.Fragment>
  )
}

export default App;
