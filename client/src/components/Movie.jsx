import React from 'react';

const Movie = (props) => {
  var title = props.movie.title;

  return (
    <p>{title}</p>
  )

}


export default Movie;
