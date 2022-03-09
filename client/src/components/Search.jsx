import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="search-movie-form" onChange={props.formChange} value={props.formValue} type="text" />
    <button className="btn hidden-sm-down" onClick= {()=> props.onHandleSearch()}>Search</button>
    <button className="back" onClick={props.refresh}>Home</button>
  </div>
);


export {Search};