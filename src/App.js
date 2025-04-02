/*
  import logo from './logo.svg';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

    export default App;
*/

import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Exercise Tracker</h1>
      {!selectedExercise ? (
        <>
          <h2>Select an Exercise</h2>
          <button onClick={() => setSelectedExercise("Repetition")}>Repetition Exercise</button>
          <button onClick={() => setSelectedExercise("Duration")}>Duration Exercise</button>
        </>
      ) : (
        <>
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          {selectedExercise === "Repetition" ? (
            <RepetitionExercise name="Push-ups" />
          ) : (
            <DurationExercise name="Running" />
          )}
        </>
      )}
    </div>
  );
}

export default App;
