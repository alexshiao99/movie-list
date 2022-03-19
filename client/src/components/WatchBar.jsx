import React from 'react';

var WatchBar = function(props) {
  return (
    <div className = 'center'>
      <button onClick={() => {props.goBack();}}>Go Back</button>
      <button className = 'true' onClick={(event) => {props.watchClick(event)}}>Watched</button>
      <button className = 'false' onClick={(event) => {props.watchClick(event)}}>To Watch</button>
    </div>
  )
}

export default WatchBar;