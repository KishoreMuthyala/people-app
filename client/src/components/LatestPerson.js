import React from "react";

const LatestPerson = ({ people }) => {
  if (people.length == 0) return <h1>Lastest Added Persons</h1>;
  return (
    <div>
      <h1>Lastest Added Persons</h1>
      {people[people.length - 1].firstname} {people[people.length - 1].lastname}
    </div>
  );
};

export default LatestPerson;
