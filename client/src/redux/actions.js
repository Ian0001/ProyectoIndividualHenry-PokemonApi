import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_ORIGIN = "FILTER_ORIGIN";

export const getPokemons = () => {
  try {
    const endpoint = "http://localhost:3001/pokemons";
    return async (dispatch) => {
      const apiResponse = await axios.get(endpoint);
      const { data } = apiResponse;
      dispatch({ type: GET_POKEMONS, payload: data });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const getPokemonByName = (pokemon) => {
  try {
    if(pokemon.id.length>4) {//para los de la DB
      pokemon.types= pokemon.types?.map((element)=> ({type:{name:element.name}}))
    };
    return async (dispatch) => {
      dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemon });
    };
  } catch (error) {
    console.log(error.message);
  }
};
export const filterPokemonByType = (type) => {
  return { type: FILTER_TYPE, payload: type };
};
export const filterPokemonByOrigin = (origin) => {
  return { type: FILTER_ORIGIN, payload: origin };
};
