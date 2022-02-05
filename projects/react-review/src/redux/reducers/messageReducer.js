import { SET_MESSAGE } from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  console.log("reducer  ", action);
  switch (action.type) {
    case SET_MESSAGE:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
}
