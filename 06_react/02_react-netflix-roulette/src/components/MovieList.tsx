import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import {Movie} from '../interfaces/Movie'

function MovieList() {
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState<Movie[]>([]);

    const getData = async() => {
        try {
            const response = await fetch('movies.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json()
            const dataArray = data.movies.map((movie: Movie) => movie) as Movie[]
            setMovieData(dataArray);
            console.log(dataArray)
        } catch (error) {
            if (error instanceof Error) {
                console.warn(String(error.message))
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <section>
            <h2>results</h2>
            <p>n movies found</p>
            <ul>
            {movieData.map((movie: Movie) => {
                <li >
                    <MovieItem movieInfo={{movie}} />
                </li>
            })} as Movie
            </ul>
        </section>
    );
}

export default MovieList