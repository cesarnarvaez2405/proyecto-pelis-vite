import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../utilities/httpClient'
import styles from './movieDetalles.module.css'

export const MoviesDetalles = () => {
  const { movieId } = useParams()
  const [movie, setMovies] = useState(null)
  useEffect(() => {

    get("/movie/" + movieId).then(data => {

      setMovies(data)

    })

  }, [movieId])

  if (!movie) {
    return null
  } else {

    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
      <>
        <div className={styles.detallesContainer}>
          <img className={`${styles.col} ${styles.image}`} src={imgUrl} alt={movie.title} />
          <div className={`${styles.col} ${styles.movieItems}`}>
            <p className={styles.movieItemsOne}><strong>Titulo: </strong> {movie.title}</p>
            <p className= {styles.descripcion}><strong>Descripcion: </strong> {movie.overview}</p>
            <p className= {styles.descripcion}>
              <strong>Generos: </strong>
              {movie.genres.map(generos => generos.name).join(", ")}
            </p>
          </div>

        </div>
      </>
    )
  }
}
