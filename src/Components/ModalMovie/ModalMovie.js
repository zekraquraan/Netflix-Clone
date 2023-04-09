import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
export default function ModalMovie(props) {

  const [comment, setComment] = useState('');


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddToFavorite = () => {
    console.log('Added to favorite:', props.recipe.title, comment);

    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.recipe.poster_path} alt={props.recipe.title} />
        <Form>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter your comment" value={comment} onChange={handleCommentChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToFavorite}>
          Add to favorite
        </Button>

      </Modal.Footer>
    </Modal>
  );
}

