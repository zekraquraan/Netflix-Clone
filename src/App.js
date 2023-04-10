import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import FavList from "./Components/FavList/FavList";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>

<Routes>
  <Route path="/"element={<Home/>}></Route>
  <Route path="/favlist" element={<FavList/>}></Route>
</Routes>
  <NavBar/>
    </>
  );
}

export default App;