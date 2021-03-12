import { createContext, useContext, useReducer } from "react";
import { authRedcuer as reducer, initialState } from "./reducer";
// eslint-disable-next-line
import {SIGN_IN, SIGN_OUT, SIGN_UP } from "./types";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signin = (id) => {
    dispatch({ type: SIGN_IN, payload: id });
  };

  const signout = () => dispatch({ type: SIGN_OUT });

  const signup = (username, email, password) => {
    const new_user = {
      id: state.users.length + 1,
      username,
      email,
      password,
    };

    dispatch({ type: SIGN_UP, payload: new_user });
  };
  return (
    <AuthContext.Provider
      value={{
        users: state.users,
        currentUser: state.currentUser,
        signin,
        signout,
        signup
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
