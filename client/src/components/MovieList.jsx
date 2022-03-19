import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import updateDBWatched from '../RequestDB/updateDBWatched.js';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedMovieID: null
    }
  }

  handleMovieClick(movieID) {
    this.setState({
      clickedMovieID: movieID
    })
  }

  handleWatchButton() {
    this.watched = !this.watched;
    updateDBWatched(this);
  }

  render() {
    return (
      <div>
        <div className = 'center'>Currently Showing for "{this.props.search}"</div>
        <div className = 'center'>Currently Selected {this.state.clickedMovie}</div>
        <ul>
          {this.props.movies.map((movie, index) => {
            if (this.props.show === 'all' || this.props.show === movie.watched.toString()) {
              return <MovieListEntry
              movie={movie} key={index} clickedMovieID={this.state.clickedMovieID}
              handleWatchButton={this.handleWatchButton.bind(movie)} clickMovie={this.handleMovieClick.bind(this)}
              />
            }
          })}
        </ul>
      </div>
    )
  }
}

export default MovieList;