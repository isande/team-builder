import React, { useState } from "react";

const Form = props => {

    const [member, setMember] = useState({ name: "", title: "", age: "", location: "", email: "" });

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", title: "", age: "", location: "", email: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name </label>
            <input 
                id="name"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor="title"> Title </label>
            <input
                id="title"
                type="text"
                placeholder="Enter title"
                name="title"
                onChange={handleChanges}
                value={member.title}
            />
            <br/><br/>
           <label htmlFor="age"> Age </label>
            <input
                id="age"
                type="number"
                name="age"
                onChange={handleChanges}
                value={member.age}
            />
          <label htmlFor="location"> Location </label>
            <input
                id="location"
                type="text"
                placeholder="City, ST"
                name="location"
                onChange={handleChanges}
                value={member.location}
            />
            <label htmlFor="email"> Email </label>
            <input
                id="email"
                type="email"
                placeholder="email@email.com"
                name="email"
                onChange={handleChanges}
                value={member.email}
            /> 
            <br/><br/>
            <button type="submit">Add Member</button>
        </form>
    )

}

export default Form;