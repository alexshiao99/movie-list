import React from 'react';

var MovieListEntry = function (props) {
  if (props.clickedMovie === props.movie.title) {
    return (
      <div>
        <li onClick={() => {props.clickMovie(props.movie.title)}}>{props.movie.title}
          <ul>
            <li>Year: {props.movie.Year}</li>
            <li>Runtime: {props.movie.Runtime}</li>
            <li>Metascore: {props.movie.Metascore}</li>
            <li>imdbRating: {props.movie.imdbRating}</li>
            <button className = 'watch-button' onClick={() => {props.handleWatchButton(); }}>Watched</button>
          </ul>
        </li>
      </div>
    )
  } else {
    return (
      <div>
        <li onClick={() => {props.clickMovie(props.movie.title)}}>{props.movie.title}</li>

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