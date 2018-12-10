import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    let cardArr = movieData.map((movie) => {
      // title, IMDBRating, genres, and poster
      const title = movie.title
      const IMDBRating = movie.IMDBRating
      const genres = movie.genres
      const poster = movie.poster

      return <MovieCard key={title} title={title} IMDBRating= {IMDBRating} genres={genres} poster= {poster} />
    })

    return cardArr;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
