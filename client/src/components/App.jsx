import React from 'react';
import defaultMovies from '../exampleData/defaultMovies.js';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchBar from './WatchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: defaultMovies,
      show: 'all',
      allMovies: defaultMovies,
      searchValue: 'All Movies',
    }
  }

  handleSearch(query) {
    this.oldMovies = this.state.movies;
    let filtered = this.state.movies.filter((movie) => {return movie.title.toLowerCase().includes(query.toLowerCase())})
    if (filtered.length === 0) {
      alert("No movie by that name found!");
    } else {
      this.setState({
        movies: filtered,
        searchValue: query
      })
    }
  }

  handleAdd(newTitle) {
    let newMovie = {title: newTitle, watched: false};
    this.setState({
      movies: this.state.movies.concat(newMovie),
      allMovies: this.state.movies.concat(newMovie)
    })
  }

  handleWatchBar(event) {
    this.setState({
      show: event.target.className
    })
  }

  goBack() {
    this.setState({
      show: 'all',
      movies: this.state.allMovies,
      searchValue: 'All Movies'
    })
  }


  render() {
    return (
      <>
        <AddMovie handleAdd={this.handleAdd.bind(this)}/>
        <SearchBar handleSearch={this.handleSearch.bind(this)}/>
        <WatchBar watchClick={this.handleWatchBar.bind(this)}  goBack={this.goBack.bind(this)}/>
        <MovieList movies={this.state.movies} show={this.state.show} search={this.state.searchValue}/>
      </>
    )
  }
}
export default App;