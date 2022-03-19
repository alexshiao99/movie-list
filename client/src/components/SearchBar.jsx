import React from 'react';
const axios = require('axios').default;
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: ''
    }
  }
  handleType(event) {
    this.setState({
       searchValue: event.target.value
     })
  }

  render() {
    return (
      <div className = 'center'>
        <input type='text' onChange={(event) => {this.handleType(event)}}></input>
        <button onClick={() => {this.props.handleSearch(this.state.searchValue); }}>Search Movies</button>
      </div>
    )
  }
}
export default SearchBar;