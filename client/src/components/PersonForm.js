import React, { useState } from "react";

const PersonForm = ({ addPerson }) => {
  //const {firstname, lastname} = person;
  const [person, setPerson] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };
    setPerson(newPerson);
    addPerson(newPerson);
    setPerson({ firstname: "", lastname: "" });
    e.target.firstname.value = "";
    e.target.lastname.value = "";
  };

  return (
    <div>
      <h1>Add Person</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="FirstName"
            required
            name="firstname"
          />
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="LastName"
            required
            name="lastname"
          />
          <button className="btn btn-success">Add Person</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
