import React, { useState } from 'react';
import './App.css';
import Members from "./Components/Members";

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
  const [teamMembers, setTeamMembers] = useState(ogTeam);
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Members members={teamMembers}/>
    </div>
  );
}

export default App;
