import { SIGN_OUT, SIGN_IN } from "./types";

export const authRedcuer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: {
          ...state.user,
          is_authenticated: true,
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          is_authenticated: false,
        },
      };
    default:
      return state;
  }
};
