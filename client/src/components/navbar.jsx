import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css"

const NavBar = ({onSearch}) => {
  const navigate= useNavigate();
  const goHome= ()=>{
    navigate("/home")
  };
  const onClick = () => {
    navigate("/form");
  };
  const [name, setName]= useState("");
  const handleChange=(event)=>setName(event.target.value);
  const location= useLocation()

  return (
    <nav className="navbar">
      <div className="buttonDiv">
        <button className="button" onClick={()=>goHome()} >Home</button>
      </div>
      {location.pathname === "/home" ? <div className="search">
        <label name="input">Buscar un pokemon</label>
        <input className="searchinput" name="input" value={name} onChange={handleChange} type="search"></input>
        <button className="button" onClick={()=>{onSearch(name)}}>Search</button>
        </div> : "" 
      }
      <div className="buttonDiv">
        <button className="button"onClick={onClick}>Crear un Pokemon</button>
      </div>
      
    </nav>
  );
};
export default NavBar;
