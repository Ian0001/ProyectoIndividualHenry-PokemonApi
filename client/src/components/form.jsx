import { useState } from "react";
import "../styles/form.css";
import NavBar from "./navbar";
import axios from "axios";
const Form = () => {
  const [pokemonData, setPokemonData]= useState({
    name:"",
    image:"",
    life:0,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    types:[]
  });

  const handleChange=(event)=>{
    if(event.target.name==="types") {
      if(pokemonData.types.includes(event.target.value)) {
        setPokemonData({...pokemonData, types:[...pokemonData.types.filter(type=>type!==event.target.value)]})
      }
      else setPokemonData({...pokemonData, types:[...pokemonData.types, event.target.value]})
      return
    };
    setPokemonData({
     ...pokemonData,
     [event.target.name]:event.target.value
    })
  };

  const handleSubmit=async()=>{
    try {
      await axios.post(`http://localhost:3001/pokemons`, pokemonData)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <NavBar></NavBar><br></br><br></br>
      <h2 className="title">Crea tu propio Pokemon!</h2>
      <div>
        <form className="form">
          <div className="labels">
            <label className="label">Nombre:</label>
            <label className="label">Url imagen:</label>
            <label className="label">Vida:</label>
            <label className="label">Ataque:</label>
            <label className="label">Defensa:</label>
            <label className="label">Velocidad:</label>
            <label className="label">Altura:</label>
            <label className="label">Peso:</label>
          </div>
          <div className="inputs">
            <div className="inputDivs">
              <input id="name" className={pokemonData.name.length>0 ?"trueValidation":"falseValidation"} name="name" onChange={handleChange} value={pokemonData.name} placeholder="Debe ingresar un nombre" type="text"></input>
            </div>
            <div className="inputDivs">
              <input id="image" className={pokemonData.image.length>0 ?"trueValidation":"falseValidation"} name="image"onChange={handleChange} value={pokemonData.image} placeholder="Debe ingresar un Url" type="text"></input>
            </div>
            <div className="inputDivs">
              <input name="life"onChange={handleChange} value={pokemonData.life} placeholder="Vida" min={0} type="number"></input>
            </div>
            <div className="inputDivs">
              <input name="attack"onChange={handleChange} value={pokemonData.attack} placeholder="Ataque"min={0} type="number"></input>
            </div>
            <div className="inputDivs">
              <input name="defense"onChange={handleChange} value={pokemonData.defense} placeholder="Defensa"min={0} type="number"></input>
            </div>
            <div className="inputDivs">
              <input name="speed"onChange={handleChange} value={pokemonData.speed} placeholder="Velocidad"min={0} type="number"></input>
            </div>
            <div className="inputDivs">
              <input name="height"onChange={handleChange} value={pokemonData.height} placeholder="Altura"min={0} type="number"></input>
            </div>
            <div className="inputDivs">
              <input name="weight"onChange={handleChange} value={pokemonData.weight} placeholder="Peso"min={0} type="number"></input>
            </div>
          </div>
          <div className="checkcontainer">
            <div><h3>Tipos de tu Pokemon</h3></div>
            <div className="checkboxes">
            <input className="inputDivs" onClick={handleChange} value="normal"name="types"type="checkbox"></input>
            <label>Normal</label>
            <input className="inputDivs" onClick={handleChange} name="types"value="fighting" type="checkbox"></input>
            <label>Fighting</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="flying" type="checkbox"></input>
            <label>Flying</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="poison" type="checkbox"></input>
            <label>Poison</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="ground" type="checkbox"></input>
            <label>Ground</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="rock" type="checkbox"></input>
            <label>Rock</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="bug" type="checkbox"></input>
            <label>Bug</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="ghost" type="checkbox"></input>
            <label>Ghost</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="steel" type="checkbox"></input>
            <label>Steel</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="fire" type="checkbox"></input>
            <label>Fire</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="water" type="checkbox"></input>
            <label>Water</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="grass" type="checkbox"></input>
            <label>Grass</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="electric" type="checkbox"></input>
            <label>Electric</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="ice" type="checkbox"></input>
            <label>Ice</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="dragon" type="checkbox"></input>
            <label>Dragon</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="dark" type="checkbox"></input>
            <label>Dark</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="fairy" type="checkbox"></input>
            <label>Fairy</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="unknown" type="checkbox"></input>
            <label>Unknown</label>
            <input className="inputDivs" onClick={handleChange} name="types" value="shadow" type="checkbox"></input>
            <label>Shadow</label>
            </div>
            <div>{pokemonData.types.length>0? "" : <p className="falseValidation">Selecciona al menos un tipo!</p>}</div>
          </div>
        </form>
      </div>
      <div className="button">
        {(pokemonData.name.length&&pokemonData.image.length&&pokemonData.types.length)
        ?<button onClick={handleSubmit} type="submit">Submit Pokemon!</button>:<p className="falseValidation">Complete los campos obligatorios!</p>}
      </div>
    </div>
    
  );
};
export default Form;

