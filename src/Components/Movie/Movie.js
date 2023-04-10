
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from 'react';

export default function Movie(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddToFavorite = () => {
    console.log('Added to favorite:', props.recipe.title);
    setShowModal(true);
  };

  return (

    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.recipe.poster_path}`} alt={props.recipe.title} />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Button variant="primary" onClick={handleShowModal}>
            Details
          </Button>
          <Button variant="success" onClick={handleAddToFavorite}>
            Add to favorite
          </Button>
        </Card.Body>
      </Card>
      <ModalMovie show={showModal} handleClose={handleCloseModal} recipe={props.recipe} />
    </>
  );
}