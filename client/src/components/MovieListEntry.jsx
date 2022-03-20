import React from 'react';

var MovieListEntry = function (props) {
  if (props.clickedMovieID === props.movie.id) {
    return (
      <div>
        <li onClick={() => {props.clickMovie(props.movie.id)}}>{props.movie.title}
          <ul>
            <li>Movie ID: {props.movie.id}</li>
            <li>Year: {props.movie.Year}</li>
            <li>imdbRating: {props.movie.imdbRating}</li>
            <button className = 'watch-button' onClick={() => {props.handleWatchButton(); }}>Watched</button>
          </ul>
        </li>
      </div>
    )
  } else {
    return (
      <div>
        <li onClick={() => {props.clickMovie(props.movie.id)}}>{props.movie.title}</li>
      </div>
    )
  }

}


export default MovieListEntry;