import React from 'react';

var Add = (props) => {
  return(
    <div className="addmovie form-inline">
    <input className="add-movie-form" onChange={props.formChange} value={props.formValue} type="text" />
    <button className="btn hidden-sm-down" onClick= {()=> props.onaddMovies()}>Add!</button>
  </div>
  )
}

export default Add;