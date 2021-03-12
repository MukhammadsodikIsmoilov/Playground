import { createContext, useContext, useReducer } from "react";
import { colorReducer as reducer, initialState } from "./reducer";
import { ADD_COLOR, REMOVE_COLOR } from "./types";
export const ColorContext = createContext();
export const useColor = () => useContext(ColorContext);

const ColorState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addColor = (nameColor, color) => {
    const newColor = {
      id: state.length + 1,
      title: nameColor,
      color: color,
    };
    dispatch({ type: ADD_COLOR, payload: newColor });
  };

  const removeColor = (id) => {
    const colors = state.filter((color) => color.id !== id);
    dispatch({ type: REMOVE_COLOR, payload: colors });
  };

  return (
    <ColorContext.Provider value={{ colors: state, addColor, removeColor }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
