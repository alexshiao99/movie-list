import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: ''
    }
  }
  handleType(event) {
    this.setState({
       addValue: event.target.value
     })
  }
  render() {
    return(
      <div className = 'center'>
      <input type='text' onChange={(event) => {this.handleType(event); }}></input>
      <button onClick={() => {this.props.handleAdd(this.state.addValue)}}>Add Movie</button>
      </div>
    )
  }
}

export default AddMovie;