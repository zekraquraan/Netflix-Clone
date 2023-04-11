import{useState,useEffect} from 'react';
import MovieList from '../MovieList/MovieList'
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import ModalMovie from '../ModalMovie/ModalMovie';
//import { propTypes } from 'react-bootstrap/esm/Image';
import Example from '../ModalMovie/test';
export default function Home(){
    
    const[movies,setMovies]=useState([]);
    async function getMovies(){
        // const url=process.env.REACT_APP_SERVER_URL;
        const url='https://movies-library-pull-9.onrender.com'
        console.log(11111,url)
        const response = await fetch(`${url}/trending`);
        console.log(22222,response)
        const moviesData=await response.json();
        console.log(333333,moviesData)
        setMovies(moviesData);
        console.log(44444,movies);
    }
    function commentHandler(newMovie,id){
       movies.map(movie=>{
         if(movie.id ===id){
            movie.comment=newMovie.userComment;
            return movie;
         }else{
            return movie
         }
       })
    }



    useEffect(()=>{getMovies()},[])
    return(
        <>
        
        < MovieList movies={movies} commentHandler={commentHandler}/>
        <Example></Example>
        </>
    )
    
    
}