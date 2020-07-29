import React from "react";
import { v4 as uuidv4 } from "uuid";
const PersonList = ({ people, delete1 }) => {
  return (
    <div>
      <h1>Person List</h1>
      <h2>Total no.of persons:{people.length}</h2>
      {people.map((p) => {
        return (
          <div key={uuidv4()} className="people">
            <li className="list">
              <div className="block">
                <div className="name">
                  {p.firstname} {p.lastname}
                </div>
                <div>
                  <button className="btn btn-success">Edit Person</button>
                </div>
                <div>
                  <button onClick={() => delete1(p)} className="btn btn-danger">
                    Delete Person
                  </button>
                </div>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
