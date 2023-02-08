import React, { useEffect, useState } from 'react'
import { MoviesCard } from './moviesCard'
import styles from "../styles/movieGrid.module.css"
import { useParams } from 'react-router-dom'
import { get } from '../utilities/httpClient'

export const MoviesGrid = () => {

    const [movies, setMovies] = useState([])
    // const movies = moviesState[0]
    // const setMovies = moviesState[1]

    useEffect(() => {
        get("/discover/movie").then(data => {
            setMovies(data.results)
        })
    }, [])
    return (

        <>

            <ul className={styles.moviesGrid}>
                {movies.map((movie) =>
                    <MoviesCard key={movie.id} movie={movie} />
                )}
            </ul>

        </>
    )
}
