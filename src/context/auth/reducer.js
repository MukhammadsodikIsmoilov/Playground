import { SIGN_OUT, SIGN_IN } from "./types";

export const initialState = {
  users: [
    {
      id: 1,
      name: "Curious",
      email: "curious.media.forfun@gmail.com",
      password: "123456",
    },
  ],
  currentUser: null,
};

export const authRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const user = state.users.find((user) => user.id === action.payload);
      return {
        ...state,
        currentUser: user,
      };
    case SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
