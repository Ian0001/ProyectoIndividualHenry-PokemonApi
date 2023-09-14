import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };
  return (
    <div className="landing">
      <h1 className="textLanding">Pokemon App!</h1>
      <button className="button" onClick={onClick}>
        Ir a Home
      </button>
    </div>
  );
};
export default Landing;
