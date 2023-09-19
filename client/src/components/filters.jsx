import { useDispatch } from "react-redux";
import { filterPokemon, getPokemons } from "../redux/actions";
import "../styles/filters.css"
import { useState, useEffect } from "react";
const Filters = () => {
  const [type, setType]= useState("none");
  const [origin, setOrigin]= useState("none");
  const [order, setOrder]= useState("attackDescend");
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    if(event.target.name==="selecttype") setType(event.target.value);
    else if(event.target.name==="order") setOrder(event.target.value);
    else setOrigin(event.target.value);
  };

  useEffect(() => {
    dispatch(filterPokemon(type, origin, order));
  }, [type, origin, order, dispatch]);
 
  const reset=()=>{
    dispatch(getPokemons())
  };

  return (
    <div className="filters">
      <button className="button" onClick={reset}>Reset Pokemons</button>
      <label className="element">Filter Type</label>
      <select className="select" onChange={handleFilter} name="selecttype">
        <option value="none">None</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
      <label className="element">Filter Origin</label>
      <select className="select" onChange={handleFilter} name="selectorigin">
        <option value="none">None</option>
        <option value="api">Api</option>
        <option value="database">Database</option>
      </select>
      <label className="element">Ordenar </label>
      <select className="select" onChange={handleFilter} name="order">
        <option value="attackDescend">Ataque descendente</option>
        <option value="attackAscend">Ataque ascendente</option>
        <option value="azDescend">A - Z</option>
        <option value="zaAscend">Z - A</option>
      </select>
    </div>
  );
};
export default Filters;
