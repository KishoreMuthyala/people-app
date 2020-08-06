import {
  ADD_PERSON,
  PERSON_ERR,
  GET_PERSONS,
  DELETE_PERSON,
  UPDATE_PERSON,
  SET_CURRENT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, persons: [...state.persons, action.payload] };
    case GET_PERSONS:
      return { ...state, persons: action.payload };
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((p) => {
          return p._id !== action.payload;
        }),
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case UPDATE_PERSON:
      //console.log(action.payload);
      return {
        ...state,
        persons: state.persons.map((p) =>
          p._id === action.payload._id ? action.payload : p
        ),
      };
    case PERSON_ERR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
