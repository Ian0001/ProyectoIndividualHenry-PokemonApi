import {FILTER, GET_POKEMONS, GET_POKEMON_BY_NAME, ORDER} from "./actions";
const initialState = {
  aux: [],
  pokemons: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.sort((a, b)=> b.attack - a.attack),
        aux: action.payload.sort((a, b)=> b.attack - a.attack),
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
      else return { ...state, pokemons: [action.payload, ...state.pokemons],
        aux:[action.payload, ...state.aux]};
    case FILTER:
      if(action.payload.type!=="none"&&action.payload.origin==="none") {
        return {
        ...state,
        pokemons: state.aux.filter((poke)=>poke.types.includes(action.payload.type))
        };
      };
      if(action.payload.type==="none"&&action.payload.origin!=="none") {
        if(action.payload.origin==="api") return {
          ...state,
          pokemons: state.aux.filter((poke)=>typeof poke.id==="number")
        };
        else return {
          ...state,
          pokemons: state.aux.filter((poke)=>typeof poke.id==="string")
        };
      };
      if(action.payload.type!=="none"&&action.payload.origin!=="none") {
        const filteredType= state.aux.filter((poke)=>poke.types.includes(action.payload.type));
        if(action.payload.origin==="api") return {
          ...state,
          pokemons: filteredType.filter((poke)=>typeof poke.id==="number")
        };
        else return {
          ...state,
          pokemons: filteredType.filter((poke)=>typeof poke.id==="string")
        };
      };
      return {
        ...state,
        pokemons: state.aux
      };
    case ORDER:
      if(action.payload==="attackDescend") {
        const orderedArray= [...state.pokemons].sort((a, b)=> b.attack - a.attack)
        return {
        ...state, pokemons: orderedArray
        }
      };
      if(action.payload==="attackAscend") return {
        ...state, pokemons: [...state.pokemons].sort((a, b)=> a.attack - b.attack)
      };
      if(action.payload==="azDescend") return {
        ...state, pokemons: [...state.pokemons].sort((a, b) =>a.name.localeCompare(b.name))
      };
      if(action.payload==="zaAscend") return {
        ...state, pokemons: [...state.pokemons].sort((a, b) =>b.name.localeCompare(a.name))
      };break;
    default:
      return { ...state };
  }
};
export default reducer;
