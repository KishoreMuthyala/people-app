import React, { useReducer, useContext } from "react";
import personReducer from "./personReducer";
import PersonContext from "./personContext";
import {
  ADD_PERSON,
  PERSON_ERR,
  GET_PERSONS,
  DELETE_PERSON,
  UPDATE_PERSON,
  SET_CURRENT,
} from "./types";
import axios from "axios";
//const personContext = useContext(PersonContext);
const PersonState = (props) => {
  const initialstate = {
    persons: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(personReducer, initialstate);

  const addPerson = async (person) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/api/people", person, config);
      dispatch({
        type: ADD_PERSON,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: PERSON_ERR,
        payload: err.response.data,
      });
    }
  };
  const getPersons = async () => {
    try {
      const res = await axios.get("/api/people/all");
      dispatch({
        type: GET_PERSONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERR,
        payload: err.response.data,
      });
    }
  };
  const setCurrent = (p) => {
    dispatch({
      type: SET_CURRENT,
      payload: p,
    });
  };
  const deletePerson = async (id) => {
    try {
      const res = await axios.delete(`/api/people/${id}`);
      dispatch({
        type: DELETE_PERSON,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERR,
        payload: err.response.data,
      });
    }
  };
  const updatePerson = async (person) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.put(`/api/people/${person._id}`, person, config);
      dispatch({
        type: UPDATE_PERSON,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERR,
        payload: err.response.data,
      });
    }
  };
  return (
    <PersonContext.Provider
      value={{
        persons: state.persons,
        current: state.current,
        addPerson,
        getPersons,
        deletePerson,
        updatePerson,
        setCurrent,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
