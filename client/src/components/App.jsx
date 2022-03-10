import React from 'react';
import {Search} from './Search.jsx';
import List from './List.jsx';
import searchList from './searchList.jsx';
import Add from './Add.jsx';
import ToWatch from './ToWatch.jsx';
import WatchedMovies from './WatchedMovies.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: '',
      query: '',
      movies: [],
      oldMovies: [],
      watchedMovies: {},
      toWatch: {}
    };
  }

  watched(event) {
    let movieName = event.target.parentElement.className;
    if(!this.state.watchedMovies[movieName]) {
      this.state.watchedMovies[movieName] = {title: movieName};
      delete this.state.toWatch[movieName]
    } else {
      delete this.state.watchedMovies[movieName];
      this.state.toWatch[movieName] = {title:movieName};
    }
  }

  addMovies() {
    this.state.toWatch[this.state.newMovie] = {title: this.state.newMovie};
    if(this.state.newMovie === '') {
      alert('Need Movie Name!');
    } else {
      this.setState({
        movies: this.state.movies.concat({title: this.state.newMovie}),
        newMovie: '',
        toWatch: this.state.toWatch
      })
    }
  }

  handleSearch() {
    this.setState({
      oldMovies: this.state.movies,
      movies: searchList(this.state.movies, this.state.query),
      query: ''
    });
  }

  handleChange(event) {
    let targetClass = event.target.className;
    if(targetClass.includes('search')) {
      this.setState({
        query: event.target.value
      });
    }
    if(targetClass.includes('add')) {
      this.setState({
        newMovie: event.target.value
      })
    }
  }

  goBack() {
    this.state.movies = [];
    for (let key in this.state.toWatch) {
      this.state.movies.push({title: this.state.toWatch[key]['title']})
    }
    for (let key in this.state.watchedMovies) {
      this.state.movies.push({title: this.state.watchedMovies[key]['title']})
    }
    this.setTheMovieState();
  }

  seeToWatch() {
    this.state.movies = [];
    for (var key in this.state.toWatch) {
      this.state.movies.push({title: this.state.toWatch[key]['title']})
    }
    this.setTheMovieState();
  }

  seeWatched() {
    this.state.movies = [];
    for (let key in this.state.watchedMovies) {
      this.state.movies.push({title: this.state.watchedMovies[key]['title']})
    }
    this.setTheMovieState();
  }
  setTheMovieState() {
    this.setState({
      movie: this.state.movie
    })
  }
  render() {
    return (
      <>
      <Add formValue={this.state.newMovie} formChange={this.handleChange.bind(this)} onaddMovies={this.addMovies.bind(this)}/>
      <Search formValue={this.state.query} formChange={this.handleChange.bind(this)} onHandleSearch={this.handleSearch.bind(this)} refresh={this.goBack.bind(this)}/>
      <ToWatch renderToWatch={this.seeToWatch.bind(this)}/>
      <WatchedMovies renderWatched={this.seeWatched.bind(this)}/>
      <List movies={this.state.movies} onWatchClick={this.watched.bind(this)} />
      </>
    )
  }
}
export default App;