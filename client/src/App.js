import React, { useState } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import LatestPerson from "./components/LatestPerson";

function App() {
  const [people, setPeople] = useState([]);
  const addPerson = (person) => {
    const newPeople = [...people, person];
    setPeople(newPeople);
    console.log(people);
  };
  const delete1 = (person) => {
    const newPerson = [...people];
    setPeople(
      newPerson.filter((p) => {
        return !(
          p.firstname === person.firstname && p.lastname === person.lastname
        );
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <PersonForm addPerson={addPerson} />
        </div>
        <div className="col-md-6">
          <PersonList people={people} delete1={delete1} />
        </div>
      </div>
      <div className="row">
        <LatestPerson people={people} />
      </div>
    </div>
  );
}

export default App;
