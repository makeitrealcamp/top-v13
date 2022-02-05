import { SET_MESSAGE, SET_POKEMONS } from "../constants";

const message = (payload) => ({
  type: SET_MESSAGE,
  message: payload,
});

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const fetchPokemons = () => (dispatch) => {
  console.log("fetchPokemons");
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((result) => result.json())
    .then((data) => {
      console.log("Lista", data);
      dispatch(setPokemons(data.results));
    });
};
