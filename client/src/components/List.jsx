import React from 'react';

var List = (props) => {
  return (
    <ul>
      {props.movies.map((item, index) => {
        return (
          <>
        <li key={index} className={item.title}>{item.title}
          <button className="watch-button" onClick={() => props.onWatchClick(event)}>Watched</button>
        </li>
          </>
        )
      })}
    </ul>
  )
}

export default List;