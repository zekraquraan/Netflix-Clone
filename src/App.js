import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Movie from "./Components/Movie/Movie"
function addMovieToFavoriteList(movie, comment) {
  axios.post("/addMovie", { movie, comment }).then((response) => {
    console.log(response.data);
    
  }).catch((error) => {
    console.error(error);
   
  });
}

function App() {
  return (
    
    <div className="App">
      <Movie addMovieToFavoriteList={addMovieToFavoriteList} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
