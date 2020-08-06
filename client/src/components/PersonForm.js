import React, { useState, useContext, useEffect } from "react";
//import { ADD_PERSON } from "../context/types";
import PersonContext from "../context/personContext";
const PersonForm = () => {
  //const {firstname, lastname} = person;
  const personContext = useContext(PersonContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { addPerson, setCurrent, current, updatePerson } = personContext;
  useEffect(() => {
    if (current !== null) {
      if (current.firstname) setFirstname(current.firstname);
      if (current.lastname) setLastname(current.lastname);
      const pid = current._id;
    } else {
      setFirstname("");
      setLastname("");
    }
  }, [personContext, current]);
  const onSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstname,
      lastname,
    };
    if (current === null) addPerson(newPerson);
    else {
      // console.log(newPerson);

      updatePerson({ ...newPerson, _id: current._id });
      setCurrent(null);
    }
  };

  return (
    <div>
      <h1>{current === null ? "Add Person" : "Edit Person"}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="FirstName"
            reqiuired
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="LastName"
            required
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <button className="btn btn-success" onClick={onSubmit}>
            {current === null ? "Add Person" : "Edit Person"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
