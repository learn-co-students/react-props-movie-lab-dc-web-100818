import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (movieData.map((movieObject) => {
      return(
        <div>
          <MovieCard title={movieObject.title} IMDBRating={movieObject.IMDBRating} genres={movieObject.genres} poster={movieObject.poster} />
        </div>
      )
    })
  )}

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
