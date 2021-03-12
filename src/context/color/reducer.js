import { ADD_COLOR, REMOVE_COLOR } from "./types";

export const initialState = [
  {
    id: 1,
    title: "black",
    color: "#000",
  },
  {
    id: 2,
    title: "white",
    color: "#fff",
  },
  {
    id: 3,
    title: "grey",
    color: "grey",
  },
  {
    id: 4,
    title: "yellow",
    color: "yellow",
  },
];

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return [...state, action.payload];
    case REMOVE_COLOR:
      return action.payload;
    default:
      return state;
  }
};
