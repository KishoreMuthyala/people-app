import React from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import PersonState from "./context/PersonState";
//import LatestPerson from "./components/LatestPerson";

function App() {
  return (
    <PersonState>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PersonForm />
          </div>
          <div className="col-md-6">
            <PersonList />
          </div>
        </div>
      </div>
    </PersonState>
  );
}

export default App;
