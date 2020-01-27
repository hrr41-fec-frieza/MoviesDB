import React from 'react';
import { MoviesDiv, Movie} from "./componentStyling/MovieStyling.js";

function Movies (props) {
  var movies = props.movies;
  var click = props.click;

  return (
    <MoviesDiv>
      {[...movies].map((movie, i) =>

        <Movie key={i} onClick={click}>
          <img id={movie._id} src={(movie.pictureURL)} height="113" width="76" />
        </Movie>
      )}
    </MoviesDiv>
  )
}

export default Movies;
