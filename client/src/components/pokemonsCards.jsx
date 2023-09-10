import "../styles/pokemonCards.css"
import { useSelector } from "react-redux";
import Card from "./card";

const PokemonsCards = () => {
  const pokemons=useSelector((state) => state.pokemons);

  return pokemons?.map((pokemon) => {
    return <Card key={pokemon.name} pokemon={pokemon}></Card>;
  });
};
export default PokemonsCards;
