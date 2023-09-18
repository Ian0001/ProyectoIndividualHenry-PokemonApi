import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/pokemons";
      const apiResponse = await axios.get(endpoint);
      const { data } = apiResponse;
      dispatch({ type: GET_POKEMONS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonByName = (pokemon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemon });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterPokemon = (type, origin) => {
  return { type: FILTER, payload: {type: type, origin: origin} };
};

export const orderPokemon = (order) => {
  return { type: ORDER, payload: order }
};

