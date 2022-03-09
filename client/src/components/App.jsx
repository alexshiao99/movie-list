import React from 'react';
import {Search} from './Search.jsx';
import List from './List.jsx';
import searchList from './searchList.jsx';
import Add from './Add.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: '',
      query: '',
      movies: [],
      oldMovies: []
    };
  }

  addMovies() {
    this.setState({
      movies: this.state.movies.concat({title: this.state.newMovie}),
      newMovie: ''
    })
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
    this.setState({
      movies: this.state.oldMovies
    });
  }

  render() {
    return (
      <>
      <Add formValue={this.state.newMovie} formChange={this.handleChange.bind(this)} onaddMovies={this.addMovies.bind(this)}/>
      <Search formValue={this.state.query} formChange={this.handleChange.bind(this)} onHandleSearch={this.handleSearch.bind(this)} refresh={this.goBack.bind(this)}/>
      <List movies={this.state.movies} />
      </>
    )
  }
}
export default App;