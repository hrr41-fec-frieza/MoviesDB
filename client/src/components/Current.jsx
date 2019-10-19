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
  box-shadow: 3px 3px 5px #B0B0B0;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const CurrentDiv = styled.div`
  height: 265px;
  width: 360px;
  margin: 5px;
  margin-top: 0;
  display:flex;
`
const Title = styled.span`
  width: 126px;
  height: 15px;
  margin: 1px 5px;
  font-size: 13px;
  float: left;
  color: #136CB2;
  font-weight: bolder;
  font-family: Verdana, Arial, sans-serif;

`
const Year = styled.span`
  width:46px;
  height: 15px;
  margin: 1px 5px;
  font-size: 13px;
  line-height: 13px;
  color: #999;
  float: left;
  font-family: Verdana, Arial, sans-serif;
`
const TitleYear = styled.div`
  width: 215px;
  height: 24px;
  margin-bottom: 5px;
`

const Rating = styled.span`
  color: #999;
  width: 44px;
  color: #999;
  border: 1px solid #999;
  border-radius: 3px;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin: 3px 3px;
  padding: 0;
`
const Genre = styled.span`
  font-size: 13px;
  color: #999;
  font-family: Verdana, Arial, sans-serif;
  margin: 5px;

`

const RatingGenre = styled.div`
  flex-basis: content;
  margin: 3px;
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

  var click = props.click;

  return (
    <CurrentDiv>
      <CurrentMovie id='current'>
        <img src={picture} height="100%" width="100%" />
        <Button>Add to Watchlist</Button>
        <Button onClick={click}> Next >> </Button>
      </CurrentMovie>
      <MovieInfo>
        <TitleYear>
          <Title>{title} </Title>
          <Year>({year})</Year>
        </TitleYear>
        <RatingGenre>
          <Rating>{rating}</Rating>
          <Genre>{genre}</Genre>
        </RatingGenre>
        <StarRating />
        <Description>{description}</Description>
        <Directors><b>Directors: </b>{director}</Directors>
        <Stars><b>Stars: </b>{movieStars}</Stars>

      </MovieInfo>
    </CurrentDiv>

  )
}


export default Current;
