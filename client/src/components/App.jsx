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
    };

    this.watchedMovies = {};
    this.toWatch = {};
    this.allMovies = [];
  }

  watched(event) {
    let movieName = event.target.parentElement.className;
    if(!this.watchedMovies[movieName]) {
      this.watchedMovies[movieName] = {title: movieName};
      delete this.toWatch[movieName]
    } else {
      delete this.watchedMovies[movieName];
      this.toWatch[movieName] = {title:movieName};
    }
  }

  addMovies() {
    if(this.state.newMovie === '') {
      alert('Need Movie Name!');
    } else {
      this.toWatch[this.state.newMovie] = {title: this.state.newMovie};
      this.setState({
        movies: this.state.movies.concat({title: this.state.newMovie}),
        newMovie: '',
      })
    }
  }
  getAllMovies() {
    this.allMovies = [];
    for (let key in this.toWatch) {
      this.allMovies.push({title: this.toWatch[key]['title']})
    }
    for (let key in this.watchedMovies) {
      this.allMovies.push({title: this.watchedMovies[key]['title']})
    }

  }
  handleSearch() {
    this.goBack();
    this.setState({
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
    this.getAllMovies();
    this.setTheMovieState(this.allMovies);
  }

  seeToWatch() {
    let arr = [];
    for (var key in this.toWatch) {
      arr.push({title: this.toWatch[key]['title']})
    }
    this.setTheMovieState(arr);
  }

  seeWatched() {
    let arr = [];
    for (let key in this.watchedMovies) {
      arr.push({title: this.watchedMovies[key]['title']})
    }
    this.setTheMovieState(arr);
  }

  setTheMovieState(array) {
    this.setState({
      movies: array
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