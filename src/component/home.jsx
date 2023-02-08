import React from 'react'
import PropTypes from 'prop-types'
import { MoviesGrid } from './moviesGrid'
import styles from "../styles/home.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MoviesDetalles } from '../pages/moviesDetalles';
import { LandingPage } from '../pages/landingPage';

export const Home = ({ titleHeader }) => {
  return (

    <>
      <Router>
        <header>

         <Link to="/"><h1 className={styles.title}>{titleHeader}</h1></Link> 
          {/* <Link to="/">Home</Link>
          <br />
          <Link to="/movie">Movie</Link> */}

        </header>

        <main>

          <Switch>
            <Route path="/movies/:movieId">
              <MoviesDetalles/>
            </Route>
            <Route path="/">
              <LandingPage/>
            </Route>
          </Switch>

        </main>
      </Router>
    </>

  )
}

Home.propTypes = {
  titleHeader: PropTypes.string.isRequired
}

Home.defaultProps = {
  titleHeader: "Peliculas principal"
}


