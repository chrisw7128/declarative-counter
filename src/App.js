import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  window.setCounter = setCounter;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
      </header>
      <p></p>
    </div>
  );
}

export default App;
