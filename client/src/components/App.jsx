import React from 'react';
import defaultMovies from '../exampleData/defaultMovies.js';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchBar from './WatchBar.jsx';
import SearchMovies from '../searchMovies/SearchMovies.js';
import getDBMovies from '../RequestDB/getDBMovies.js';
import postDBMovie from '../RequestDB/postDBMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      show: 'all',
      searchValue: 'All Movies',
    }
  }

  handleSearch(query) {
    getDBMovies()
    .then((movies) => {
      let filtered = this.state.movies.filter((movie) => {return movie.title.toLowerCase().includes(query.toLowerCase())})
      if (filtered.length === 0) {
        alert("No movie by that name found!");
      } else {
        this.setState({
          movies: filtered,
          searchValue: query
        })
      }
    })
  }

  handleAdd(newTitle) {
    if (newTitle === '') {
      alert('Need a title!');
    } else {
      SearchMovies(newTitle)
      .then((newMovie) => postDBMovie(newMovie))
      .then(() => getDBMovies())
      .then((newMovies) => {
        this.setState({
          movies: newMovies
        })
      })
      .catch((error) => {console.log(error)})
    }
  }

  handleWatchBar(event) {
    this.setState({
      show: event.target.className
    })
  }

  goBack() {
    getDBMovies()
    .then((movies) => {
      this.setState({
        show: 'all',
        searchValue: 'All Movies',
        movies: movies
      })
    });
  }
  componentDidMount() {
    this.goBack();
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