
import Home from '././Components/Home/Home'
import FavList from '././Components/FavList/FavList';
import NavBar from '././Components/NavBar/NavBar';
import {Routes,Route} from  'react-router-dom';
function App() {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favList' element={<FavList/>}/>

      </Routes>
    </>
  );
}

export default App;