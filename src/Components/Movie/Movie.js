import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react';

export default function Movie(props){
    

const [show,setShow]=useState(false)
const handleClose=()=>setShow(false);
const handleShow=()=>{ console.log(show)
    setShow(true);
    
}

    return(
      <>
      <ModalMovie show={show} movieData={props.movie} handleClose={handleClose} handleShow={handleShow}/> 
          <Card style={{width:"20rem"}}>
                <Card.Img varient='top' src={`${'https://www.themoviedb.org/t/p/w220_and_h330_face/'}${props.movie.poster_path}`}/>
                <Card.Body>
                   <Card.Title>{props.movie.title}</Card.Title>
                   <Card.Text>{props.movie.release_date}</Card.Text>
                   <Button varient='primary' onClick={handleShow}>add to the favorite list</Button>

                </Card.Body>
          </Card>
             
      </>
    )
}