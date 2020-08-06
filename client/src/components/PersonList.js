import React, { useState, useContext, useEffect } from "react";
import PersonContext from "../context/personContext";
//import { SET_CURRENT } from "../context/types";
const PersonList = () => {
  const personContext = useContext(PersonContext);
  const { persons, getPersons, deletePerson, setCurrent } = personContext;
  useEffect(() => {
    getPersons();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Person List</h1>
      <h2>Total no.of persons:{personContext.persons.length}</h2>
      {persons.map((p) => {
        return (
          <div key={p._id} className="card p-4 mb-2">
            <div className="block">
              <div className="name">
                {p.firstname} {p.lastname}
              </div>
              <div>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => setCurrent(p)}
                >
                  Edit Person
                </button>
              </div>
              <div>
                <button
                  onClick={() => deletePerson(p._id)}
                  className="btn btn-danger mb-6"
                >
                  Delete Person
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
