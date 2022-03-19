import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedMovie: null
    }
  }

  handleMovieClick(movieTitle) {
    this.setState({
      clickedMovie: movieTitle
    })
  }

  handleWatchButton() {
    this.watched = !this.watched;
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
              movie={movie} key={index} clickedMovie={this.state.clickedMovie}
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