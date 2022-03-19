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
// class MovieListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: this.props.title,
//       watched: false
//     }
//     this.yesWatched = this.yesWatched.bind(this);
//   }
//   yesWatched() {
//     this.setState({
//       watched: !this.state.watched
//     })
//   }
//   render() {
//     console.log(this.props.show);
//     if (this.props.show === 'all') {
//     }
//     if (this.state.watched.toString() === this.props.show) {
//       return (
//         <>
//         <li>{this.state.title}</li>
//         <button onClick={this.yesWatched}>Watched</button>
//         </>
//       )
//     }
//   }
// }

export default MovieListEntry;