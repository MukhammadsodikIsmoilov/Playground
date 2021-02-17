import { createContext, useContext, useReducer } from "react";
import {authRedcuer as reducer} from "./reducer";
// eslint-disable-next-line
import { REGISTER, SIGN_IN, SIGN_OUT } from "./types";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthState = (props) => {
  const initialState = {
    user: {
      id: 1,
      name: "Curious",
      email: "curious.media.forfun@gmail.com",
      password: "123456",
      is_authenticated: false,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const signin = (name, password) => {
    if (state.user.name === name && state.user.password === password){
      dispatch({ type: SIGN_IN });
    }
    else console.info("You are not user");
  };

  const signout = () => dispatch({ type: SIGN_OUT });

  // const registr = (name, email, password) => {
  //   const new_user = {
  //     id: state.users[state.users.length - 1].id + 1,
  //     name,
  //     email,
  //     password,
  //     is_authenticated: true,
  //   };

  //   dispatch({ type: REGISTER, payload: new_user });
  // };
  return (
    <AuthContext.Provider value={{user: state.user, signin, signout}}>
      {props.children}
    </AuthContext.Provider>
  );
};
