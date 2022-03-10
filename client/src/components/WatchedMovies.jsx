import React from 'react';

var WatchedMovies = (props) => {
  return (
  <button className="watched-movies" onClick={props.renderWatched}>Watched Movies</button>
  )
}

export default WatchedMovies;