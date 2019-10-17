import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import StarRating from './StarRating.jsx';


const CurrentMovie =styled.div`
  height: 100%;
  width: 110px;
  padding: 10px;
  background-color: red;
`
const MovieInfo = styled.div`
  background-color:yellow;
`

const CurrentDiv = styled.div`
  background-color: green;
  display:flex;
`


function Current (props) {
  var picture = props.movie.pictureURL;
  var title = props.movie.title;
  var year = props.movie.year;
  var description = props.movie.description;
  var rating = props.movie.rating;
  var genre = props.movie.genre;
  var starRating = props.movie.starRating;
  var director = props.movie.director;
  var movieStars = props.movie.stars;

  return (
    <CurrentDiv>
      <CurrentMovie>
        <img src={picture} height="150" width="100"/>
      </CurrentMovie>
      <MovieInfo>
        <p>
          {title} ({year})<br/>
          {rating} {genre} <br/>
          <StarRating /><br/>
          {description} <br/>
          {director} <br/>
          {movieStars}
        </p>
      </MovieInfo>
    </CurrentDiv>

  )
}


export default Current;
