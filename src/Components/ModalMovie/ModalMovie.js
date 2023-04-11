import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
export default function ModalMovie(props) {

  //const [comment, setComment] = useState('');


  // const handleCommentChange = (event) => {
  //   setComment(event.target.value);
  // };

  // const handleAddToFavorite = () => {
  //   console.log('Added to favorite:', props.recipe.title, comment);

  //   props.handleClose();
  // };

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipe.title}</Modal.Title>
      </Modal.Header>
      <img src={`https://image.tmdb.org/t/p/w500/${props.recipe.poster_path}`} alt={props.recipe.title} />
        
      <Modal.Body>{props.recipe.overview}</Modal.Body>
        
      
      <Modal.Footer >
        <Button variant="secondary" onClick={props.handleClose} >
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
        
      
        </Button>

      </Modal.Footer>
    </Modal>
  );
}

