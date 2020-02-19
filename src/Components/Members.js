import React from "react";

const Members = props => {
    return (
        <div>
            {props.members.map(member => (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <h3>Title: {member.title}</h3>
                    <p>Age: {member.age}</p>
                    <p>Location: {member.location}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;