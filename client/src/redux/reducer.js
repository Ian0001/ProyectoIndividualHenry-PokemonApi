import {FILTER_ORIGIN, FILTER_TYPE, GET_POKEMONS, GET_POKEMON_BY_NAME} from "./actions";
const initialState = {
  aux: [],
  auxOrigin: [],
  pokemons: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        aux: action.payload,
        auxOrigin: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      const poke = state.pokemons.find(
        (element) => element.name === action.payload.name
      );
      if (poke) {
        //si ya existe en el estado global lo traigo al frente
        const pokemonsModified = [
          action.payload,
          ...state.pokemons.filter(
            (element) => element.name !== action.payload.name
          ),
        ];
        return {
          ...state,
          pokemons: pokemonsModified,
          aux: pokemonsModified,
        };
      } //si no, lo agrego
      else return { ...state, pokemons: [action.payload, ...state.pokemons] };
    case FILTER_TYPE:
      if (action.payload === "none") return { ...state, pokemons: state.aux };
      const typeFiltered = state.aux.filter((poke) =>
        poke.types.find((element) => element.type.name === action.payload)
      );
      return { ...state, pokemons: typeFiltered, auxOrigin: typeFiltered };
    case FILTER_ORIGIN:
      if (action.payload === "none")
        return { ...state, pokemons: state.auxOrigin };
      if (action.payload === "database")
        return {
          ...state,
          pokemons: state.auxOrigin.filter(
            (poke) => typeof poke.id !== "number"
          ),
        };
      return {
        ...state,
        pokemons: state.auxOrigin.filter((poke) => typeof poke.id === "number"),
      };
    default:
      return { ...state };
  }
};
export default reducer;
