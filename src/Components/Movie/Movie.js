import { useState } from "react";
import axios from "axios";
import ModalMovie from "./Components/ModalMovie/ModalMovie.js";


function Movie(props) {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

  const handleAddToFavorites = () => {
    setShowModal(true);
  };

  const handleSave = (movie) => {
    // Add the movie to the favorite list with the comment
    // You can use the `props.onSave` callback from the parent component to do this
    props.onSave(movie, comment);

    // Close the modal
    setShowModal(false);

    // Store the data in your database using the /addMovie endpoint
    axios.post("/addMovie", {
      title: movie.title,
      image: movie.image,
      comment: comment,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="movie">
      <img src={props.movie.image} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <button onClick={handleAddToFavorites}>Add to favorite</button>
      {showModal && (
        <ModalMovie
          movie={props.movie}
          onSave={handleSave}
          onCommentChange={handleCommentChange}
        />
      )}
    </div>
  );
}
export default Movie;