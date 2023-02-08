import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/moviecard.module.css"

export const MoviesCard = ({ movie }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <>

            <li  className={styles.movieCard}>

                <Link to={"/movies/" + movie.id}>
                <img className={styles.movieImage} src={imgUrl} alt={movie.title} />
                <div className= {styles.movieTitles}>{movie.title}</div>

                </Link>



            </li>

        </>
    )
}
