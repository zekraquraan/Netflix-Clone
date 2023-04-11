import Button from 'react-bootstrap/Button';
import Modal  from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form'
import  ModalBody  from 'react-bootstrap/ModalBody';
import  ModalHeader  from 'react-bootstrap/ModalHeader';
import  ModalTitle  from 'react-bootstrap/ModalTitle';
import  ModalFooter  from 'react-bootstrap/ModalFooter';
import { useRef } from 'react';



export default function ModalMovie(props) {
  console.log(props)
  const commentRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log("user comment is:", userComment)

    let newMovie = { ...props.movieData, userComment }
    console.log(newMovie);


  }


  return (
<div>
    <Modal show={props.show} onHide={props.handleClose} >
      <ModalHeader closeButton>
        <ModalTitle>{props.movieData.title}</ModalTitle>

      </ModalHeader>
      <img src={`${'https://image.tmdb.org/t/p/w500//'}${props.movieData.poster_path}`} alt={props.movieData.title} />
      <ModalBody>
        {props.movieData.comment ? props.movieData.comment : "Noo comment added !!"}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>comment</Form.Label>
            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
            <Form.Text className="text-muted">
              enter your comment.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
            Submit
          </Button>
        </Form></ModalBody>
      <ModalFooter>
        <Button variant="secondary" >
          Close
        </Button>
      </ModalFooter>
    </Modal></div>
  )

}
