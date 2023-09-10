import { getPokemonByName } from "../redux/actions";
import PokemonsCards from "./pokemonsCards";
import NavBar from "./navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../redux/actions";
import Filters from "./filters";
import "../styles/home.css";
const Home = () => {
  const dispatch = useDispatch();
  const onSearch = (name) => {
    dispatch(getPokemonByName(name));
  };
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div className="body">
      <NavBar onSearch={onSearch}></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <Filters></Filters>
      <div className="cards">
        <PokemonsCards></PokemonsCards>
      </div>
    </div>
  );
};
export default Home;
