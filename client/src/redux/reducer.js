import {FILTER, GET_POKEMONS, GET_POKEMON_BY_NAME} from "./actions";
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
        const pokemonsType= [...state.aux].filter((poke)=>poke.types.includes(action.payload.type));
        if(action.payload.order==="attackDescend")  return {
          ...state, pokemons: [...pokemonsType].sort((a, b)=> b.attack - a.attack)
        };
        if(action.payload.order==="attackAscend") return {
          ...state, pokemons: [...pokemonsType].sort((a, b)=> a.attack - b.attack)
        };
        if(action.payload.order==="azDescend") return {
          ...state, pokemons: [...pokemonsType].sort((a, b) =>a.name.localeCompare(b.name))
        };
        if(action.payload.order==="zaAscend") return {
          ...state, pokemons: [...pokemonsType].sort((a, b) =>b.name.localeCompare(a.name))
        };
      };
      if(action.payload.type==="none"&&action.payload.origin!=="none") {
        if(action.payload.origin==="api") {
          const pokemonsApi= [...state.aux].filter((poke)=>typeof poke.id==="number");
          if(action.payload.order==="attackDescend")  return {
            ...state, pokemons: pokemonsApi.sort((a, b)=> b.attack - a.attack)
          };
          if(action.payload.order==="attackAscend") return {
            ...state, pokemons: pokemonsApi.sort((a, b)=> a.attack - b.attack)
          };
          if(action.payload.order==="azDescend") return {
            ...state, pokemons: pokemonsApi.sort((a, b) =>a.name.localeCompare(b.name))
          };
          if(action.payload.order==="zaAscend") return {
            ...state, pokemons: pokemonsApi.sort((a, b) =>b.name.localeCompare(a.name))
          };
        }
        else {
          const pokemonsDb= [...state.aux].filter((poke)=>typeof poke.id==="string");
          if(action.payload.order==="attackDescend")  return {
            ...state, pokemons: pokemonsDb.sort((a, b)=> b.attack - a.attack)
          };
          if(action.payload.order==="attackAscend") return {
            ...state, pokemons: pokemonsDb.sort((a, b)=> a.attack - b.attack)
          };
          if(action.payload.order==="azDescend") return {
            ...state, pokemons: pokemonsDb.sort((a, b) =>a.name.localeCompare(b.name))
          };
          if(action.payload.order==="zaAscend") return {
            ...state, pokemons: pokemonsDb.sort((a, b) =>b.name.localeCompare(a.name))
          }; 
        };
      };
      if(action.payload.type!=="none"&&action.payload.origin!=="none") {
        const filteredType= [...state.aux].filter((poke)=>poke.types.includes(action.payload.type));
        if(action.payload.origin==="api") {
          const pokemonsTypeApi= filteredType.filter((poke)=>typeof poke.id==="number");
          if(action.payload.order==="attackDescend")  return {
            ...state, pokemons: pokemonsTypeApi.sort((a, b)=> b.attack - a.attack)
          };
          if(action.payload.order==="attackAscend") return {
            ...state, pokemons: pokemonsTypeApi.sort((a, b)=> a.attack - b.attack)
          };
          if(action.payload.order==="azDescend") return {
            ...state, pokemons: pokemonsTypeApi.sort((a, b) =>a.name.localeCompare(b.name))
          };
          if(action.payload.order==="zaAscend") return {
            ...state, pokemons: pokemonsTypeApi.sort((a, b) =>b.name.localeCompare(a.name))
          };
        }
        else {
          const pokemonsTypeDb= filteredType.filter((poke)=>typeof poke.id==="string");
          if(action.payload.order==="attackDescend")  return {
            ...state, pokemons: pokemonsTypeDb.sort((a, b)=> b.attack - a.attack)
          };
          if(action.payload.order==="attackAscend") return {
            ...state, pokemons: pokemonsTypeDb.sort((a, b)=> a.attack - b.attack)
          };
          if(action.payload.order==="azDescend") return {
            ...state, pokemons: pokemonsTypeDb.sort((a, b) =>a.name.localeCompare(b.name))
          };
          if(action.payload.order==="zaAscend") return {
            ...state, pokemons: pokemonsTypeDb.sort((a, b) =>b.name.localeCompare(a.name))
          };
        };
      };
      if(action.payload.type==="none"&&action.payload.origin==="none") {
        if(action.payload.order==="attackDescend")  return {
          ...state, pokemons: [...state.aux].sort((a, b)=> b.attack - a.attack)
        };
        if(action.payload.order==="attackAscend") return {
          ...state, pokemons: [...state.aux].sort((a, b)=> a.attack - b.attack)
        };
        if(action.payload.order==="azDescend") return {
          ...state, pokemons: [...state.aux].sort((a, b) =>a.name.localeCompare(b.name))
        };
        if(action.payload.order==="zaAscend") return {
          ...state, pokemons: [...state.aux].sort((a, b) =>b.name.localeCompare(a.name))
        };
      };break;
    default:
      return { ...state };
  }
};
export default reducer;
