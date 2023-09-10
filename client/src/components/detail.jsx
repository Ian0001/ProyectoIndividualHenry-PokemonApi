import { useEffect, useState } from "react";
import NavBar from "./navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/detail.css";
const URL = `http://localhost:3001/pokemons`;
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
        setDetail(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setDetail({});
  }, [id]);
  return (
    <div>
      <NavBar></NavBar>
      <br></br><br></br><br></br>
      <div className="detail">
        <div className="text">
          <img src={detail.image} alt="imagen"></img>
          <h3>Name: {detail.name}</h3>
          <h3>Attack: {detail.attack}</h3>
          <h3>Defense: {detail.defense}</h3>
          <h3>Life: {detail.life}</h3>
          <h3>Speed: {detail.speed}</h3>
          <h3>Height: {detail.height}</h3>
          <h3>Weight: {detail.weight}</h3>
          <h3>
            Types:
            {detail.types?.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Detail;
