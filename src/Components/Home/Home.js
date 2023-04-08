import MovieList from "../MovieList/MovieList";
import React, {useState, useEffect } from 'react';
import axios from "axios";
function Home(){
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
    axios.get("/trending").then((response) => {
      setMovies(response.data);
    }).catch((error) => {
      console.error(error);}
    )
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US")
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);
  
  function addMovieToFavoriteList(movie, comment) {
    axios.post("/addMovie", { movie, comment }).then((response) => {
      console.log(response.data);
      // Handle the response as needed
    }).catch((error) => {
      console.error(error);
      // Handle the error as needed
    });
  }
  return (
    <div className="home">
    <MovieList movies={movies} onSave={addMovieToFavoriteList} />
    <div>
      <MovieList movies={movies} />
    </div>
    </div>
  );
}

export default Home;
  