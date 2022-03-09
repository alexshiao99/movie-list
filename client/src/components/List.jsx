import React from 'react';

var List = (props) => {
  return (
    <ul>
      {props.movies.map((item, index) => <li key={index}>{item.title}</li>)}
    </ul>
  )
}

export default List;