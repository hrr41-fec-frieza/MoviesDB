import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import StarRating from './StarRating.jsx';


const CurrentMovie =styled.div`
  width: 127.986px;
  height: 190px;
  margin-left: 10px;
  display:flex;
  flex-direction: column;
`

const Button = styled.button`
  margin-left: 5.2;
  margin-right: 5.2;
  margin-top: 7px;
  height: 17.778;
  width: 106.424;
  background-color: 'yellow';
`

const MovieInfo = styled.div`
  width: 215px;
  height: 265px;
  margin: 5px;
  padding: 5px;
`

const CurrentDiv = styled.div`
  height: 265px;
  width: 360px;
  margin: 5px;
  margin-top: 0;
  display:flex;
`
const Title = styled.a`
  width: auto;
  height: auto;
  color: #136CB2;
  font-weight: bolder;
  font-family: Verdana, Arial, sans-serif;

`
const Year = styled.span`
  font-size: 13px;
  line-height: 13px;
  color: #999;
  font-family: Verdana, Arial, sans-serif;
`
const Rating = styled.span`
  color: #999;
  height: 13px;
  width: 44px;
  color: #999;
  border: 1px solid #999;
  border-radius: 3px;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  padding: 1px;
  margin: 3px;
`
const Genre = styled.span`
  font-size: 13px;
  color: #999;
  font-family: Verdana, Arial, sans-serif;
  margin: 5px;

`

const Description = styled.p`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  height: 171.997;
  width: 215;

`

const Directors = styled.div`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  margin:0px;
  padding:0px;
`

const Stars = styled.div`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  margin:0px;
  padding:0px;

`

function Current (props) {
  var picture = props.movie.pictureURL;
  var title = props.movie.title;
  var year = props.movie.year;
  var description = props.movie.description;
  var rating = props.movie.rating;
  var splitGenre = props.movie.genre.split(',');
  var genre = splitGenre.join('|');
  var starRating = props.movie.starRating;
  var director = props.movie.director;
  var movieStars = props.movie.stars;

  return (
    <CurrentDiv>
      <CurrentMovie id='current'>
        <img src={picture} height="100%" width="100%"/>
        <Button>Add to Watchlist</Button>
        <Button> Next >> </Button>
      </CurrentMovie>
      <MovieInfo>
        <Title>{title} </Title>
        <Year>({year})</Year>
        <Rating>{rating}</Rating>
        <Genre>{genre}</Genre>
        <StarRating />
        <Description>{description}</Description>
        <Directors><b>Directors: </b>{director}</Directors>
        <Stars><b>Stars: </b>{movieStars}</Stars>

      </MovieInfo>
    </CurrentDiv>

  )
}


export default Current;
