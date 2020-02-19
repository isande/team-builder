import React, { useState } from 'react';
import './App.css';
import Members from "./Components/Members";
import Form from "./Components/Form";

const ogTeam = [
  {
    id: 1,
    name: "Jane Smith",
    title: "President",
    age: "45",
    location: "Las Cruces, NM",
    email: "jsmith@teambuilder.com"
  },
  {
    id: 2,
    name: "John Doe",
    title: "Chief Bottle Washer",
    age: "28",
    location: "Destin, FL",
    email: "jdoe@teambuilder.com"
  },
  {
    id: 3,
    name: "Jason Dawn",
    title: "Tiger Feeder",
    age: "36",
    location: "Brownsville, TX",
    email: "jdawn@teambuilder.com"
  }
];

function App() {
  const [teamMembers, setTeamMembers] = useState(ogTeam);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      title: member.title,
      age: member.age,
      location: member.location,
      email: member.email
    };

    setTeamMembers([ ...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Members members={teamMembers} />
    </div>
  );
}

export default App;
