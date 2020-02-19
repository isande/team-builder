import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const ogTeam = [
  {
    id: 1,
    name: "Jane Smith",
    title: "President",
    age: "45",
    location: "Las Cruces, NM"
  },
  {
    id: 2,
    name: "John Doe",
    title: "Chief Bottle Washer",
    age: "28",
    location: "Destin, FL"
  },
  {
    id: 3,
    name: "Jason Dawn",
    title: "Tiger Feeder",
    age: "36",
    location: "Brownsville, TX"
  }
];

function App() {
  const [teamMembers, setTeamMembers] = useState(ogTeam;)
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
