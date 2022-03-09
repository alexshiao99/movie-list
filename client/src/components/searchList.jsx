import React from 'react';

var searchList = (movies, query) => {
  let filtered = [];
  movies.forEach((item, index) => {
    if(item.title.includes(query)) {
      filtered.push(item);
    }
  })
  if (filtered.length === 0) {
    alert('No movie of that name found!')
  }
  return filtered;
}

export default searchList;
