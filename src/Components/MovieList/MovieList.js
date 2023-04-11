import Movie from '../Movie/Movie'
export default function MovieList(props) {
    return (
        <>


            {
                props.recipes.map(recipe => {
                    return (
                        <Movie recipe={recipe} />
                    )
                })
            }
        </>
    )
}
