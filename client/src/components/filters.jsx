import { useDispatch } from "react-redux";
import { filterPokemonByOrigin, filterPokemonByType, getPokemons } from "../redux/actions";
import "../styles/filters.css"
const Filters = () => {
  const dispatch = useDispatch();
  const handleFilterType = (event) => {
    dispatch(filterPokemonByType(event.target.value));
  };
  const handleFilterOrigin = (event) => {
    dispatch(filterPokemonByOrigin(event.target.value));
  };
  const reset=()=>{
    dispatch(getPokemons())
  };
  return (
    <div className="filters">
      <button className="button" onClick={reset}>Reset Pokemons</button>
      <label className="element">Filter Type</label>
      <select className="select" onChange={handleFilterType} name="selecttype">
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
      <select className="select" onChange={handleFilterOrigin} name="selectorigin">
        <option value="none">None</option>
        <option value="api">Api</option>
        <option value="database">Database</option>
      </select>
    </div>
  );
};
export default Filters;
