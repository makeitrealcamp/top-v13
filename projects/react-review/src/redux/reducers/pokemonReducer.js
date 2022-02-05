import { SET_POKEMONS } from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  console.log("reducer pokemon  ", action);
  switch (action.type) {
    case SET_POKEMONS:
      return {
        pokemons: action.payload,
      };
    default:
      return state;
  }
}
