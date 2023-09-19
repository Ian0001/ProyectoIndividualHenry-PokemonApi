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
    if(start!==0) {
      setStart(start - 12);
      setEnd(end - 12)
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  const next=()=>{
    if(end<pokemons.length){ 
      setStart(start + 12);
      setEnd(end + 12)
    } 
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  useEffect(()=>{
    if(pokemons.length<12) {setDisplay(pokemons)}//1 sola pag
    else setDisplay(pokemons.slice(start,end))
  },[start, end, pokemons]);

  const pageClick=(e)=>{
    setStart(e.target.name*12); setEnd((e.target.name*12) + 12);
  };
  
  const buttonsNumbers=[];// creo un array segun la cantidad de paginas(o de sets de 12 pokemons q es lo mismo)
  for (let i = 0; i < Math.ceil(pokemons.length/12); i++) {
    buttonsNumbers.push(i)
  };

  return (
    <div>
      <div className="cards">
        {!pokemons.length?<p className="loading">Loading...</p>:""}
        {display?.map((pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon}></Card>;
        })}
      </div>
      <div className="page"> 
        <button className="button" onClick={previous}>Anterior</button> 
        {buttonsNumbers.map((element)=><button className={start===(element*12)?"onPage":"offPage"} 
        key={element} name={`${element}`} onClick={pageClick}>{element}</button>)}
        <button className="button" onClick={next} >Siguiente</button>
      </div>
    </div>
  );
};
export default PokemonsCards;
