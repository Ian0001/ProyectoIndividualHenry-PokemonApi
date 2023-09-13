import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from './components/landing';
import Home from './components/home';
import Form from "./components/form";
import Detail from "./components/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/home/detail/:id" element={<Detail/>}></Route>
    </Routes>
  );
}

export default App;
