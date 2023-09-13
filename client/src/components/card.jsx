import { Link } from "react-router-dom";
import "../styles/card.css";
const Card = ({ pokemon }) => {
  const upperCaseName= pokemon.name[0].toUpperCase()+pokemon.name.slice(1,pokemon.name.length)
  if(pokemon.id.length>4) {
    pokemon.types= pokemon.types?.map((element)=> ({type:{name:element.name}}))
  };
  return (
    <div className="card">
      <Link to={`detail/${pokemon.id}`}><img className="image" src={pokemon.image} alt="imagen"></img></Link>
      <h2>{upperCaseName}</h2>
      <div className="types">
        <ul >
          <h3>Types:</h3>
          {pokemon.types?.map((element) => (
            <li key={element.type.name}>
              {element.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;
