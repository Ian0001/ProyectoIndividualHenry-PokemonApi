import { getPokemonByName } from "../redux/actions";
import PokemonsCards from "./pokemonsCards";
import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions";
import Filters from "./filters";
import axios from "axios";
import "../styles/home.css";
const Home = () => {
  const [found, setFound]= useState(true)//para cuando no se encuentre un pokemon
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const onSearch = async(name) => {
    try {
      const endpoint = `http://localhost:3001/pokemons/?name=${name}`;
      const apiResponse = await axios.get(endpoint);
      const { data } = apiResponse;
      dispatch(getPokemonByName(data));
      setFound(true);
    } catch (error) {
      console.log(error.message);
      setFound(false)
    }
  };
  useEffect(() => {
    if(pokemons.length===0) dispatch(getPokemons());
  }, [dispatch, pokemons]);

  return (
    <div className="body">
      <NavBar onSearch={onSearch}></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <Filters></Filters>
      <div >
        {found===true?"":<p className="badSearch">No existe un pokemon con ese nombre!</p>}
        <PokemonsCards></PokemonsCards>
      </div>
    </div>
  );
};
export default Home;
