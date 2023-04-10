

import MovieList from '../MovieList/MovieList'


import { useState, useEffect } from 'react';


export default function Home() {
    const [recipes, setRecipes] = useState([])

    async function getRecipes() {
        const url = 'https://movies-library-pull-9.onrender.com';


        const response = await fetch(`${url}/trending`);


        const recipesData = await response.json();


        setRecipes(recipesData);


    }



    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <>
            <h2> Movie-List</h2>



            <MovieList recipes={recipes} />
        </>
    )
}