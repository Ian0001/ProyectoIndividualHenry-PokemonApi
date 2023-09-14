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

  const pageClick=(e)=>{
    if(e.target.name==="1") {setStart(0); setEnd(12)}
    if(e.target.name==="2") {setStart(12); setEnd(24)}
    if(e.target.name==="3") {setStart(24); setEnd(36)}
    if(e.target.name==="4") {setStart(36); setEnd(48)}
    if(e.target.name==="5") {setStart(48); setEnd(60)}
  }

  return (
    <div>
      <div className="cards">
        {display?.map((pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon}></Card>;
        })}
      </div>
      <div className="page">
        <button className="button" onClick={previous}>Anterior</button>
        <button className={start===0?"onPage":"offPage"} name="1" onClick={pageClick}>1</button>
        <button className={start===12?"onPage":"offPage"} name="2" onClick={pageClick}>2</button>
        <button className={start===24?"onPage":"offPage"} name="3" onClick={pageClick}>3</button>
        <button className={start===36?"onPage":"offPage"} name="4" onClick={pageClick}>4</button>
        <button className={start===48?"onPage":"offPage"} name="5" onClick={pageClick}>5</button>
        <button className="button" onClick={next} >Siguiente</button>
      </div>
    </div>
  );
};
export default PokemonsCards;
