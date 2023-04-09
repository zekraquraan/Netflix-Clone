import './App.css';

import Home from './Components/Home/Home'
import Movie from './Components/Movie/Movie'
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favMovi' element={<Movie />} />
      </Routes>



    </>
  );

}

export default App;