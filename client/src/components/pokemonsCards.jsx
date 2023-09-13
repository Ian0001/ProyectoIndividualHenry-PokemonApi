import "../styles/pokemonCards.css";
import { useSelector } from "react-redux";
import Card from "./card";
import { useEffect, useState } from "react";

const PokemonsCards = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const [start, setStart]= useState(0);
  const [end, setEnd]= useState(12);
  const [display, setDisplay]= useState(pokemons.slice(start,end));
  const previous=()=>{
    if(start===0) {
      setStart(48);
      setEnd(60)
    }
    else {
      setStart(start - 12);
      setEnd(end - 12)
    };
  };
  const next=()=>{
    if(start===48){ 
      setStart(0); 
      setEnd(12)
    } 
    else {
      setStart(start + 12);
      setEnd(end + 12)
    };
  };
  useEffect(()=>{
    if(pokemons.length<12) {setDisplay(pokemons)}
    else setDisplay(pokemons.slice(start,end))
  },[start, end, pokemons]);

  return (
    <div>
      <div className="cards">
        {display?.map((pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon}></Card>;
        })}
      </div>
      <div className="page">
        <button className="button" onClick={previous}>Anterior</button> <button className="button" onClick={next} >Siguiente</button>
      </div>
    </div>
  );
};
export default PokemonsCards;
