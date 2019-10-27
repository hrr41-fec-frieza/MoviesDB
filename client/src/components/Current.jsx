import React from 'react';
import styled from 'styled-components';
// const {styled} = window;
import StarRating from './StarRating.jsx';


const CurrentMovie =styled.div`
  width: 127.986px;
  height: 190px;
  margin-left: 10px;
  display:flex;
  flex-direction: column;
  box-shadow: 3px 3px 5px #B0B0B0;
  cursor: pointer;
`

const Button = styled.button`
  margin-left: 5.2;
  margin-right: 5.2;
  margin-top: 7px;
  height: 17.778;
  width: 106.424;
  cursor: pointer;
`

const MovieInfo = styled.div`
  width: 215px;
  height: 265px;
  margin: 5px;
  padding: 5px;
  display: block;

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
  line-height: 0.9;
  color: #136CB2;
  font-weight: bolder;
  font-family: Verdana, Arial, sans-serif;
  cursor: pointer;

`
const Year = styled.span`
  width:46px;
  height: 15px;
  margin: 1px 5px;
  font-size: 13px;
  color: #999;

  font-family: Verdana, Arial, sans-serif;
`
const TitleYear = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 5px;
  position:relative;
`

const Rating = styled.span`
  color: #999;
  width: 44px;
  color: #999;
  border: 1px solid #999;
  border-radius: 3px;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  margin: 3px 3px;
  padding: 0;
`
const Genre = styled.span`
  font-size: 10px;
  color: #999;
  font-family: Verdana, Arial, sans-serif;
  margin: 5px;

`

const RatingGenre = styled.div`
  flex-basis: content;
  margin: 3px;
  position:relative;
`

const Description = styled.div`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  height: 120px;
  width: 215px;
  overflow: hidden;


`

const Directors = styled.div`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  margin:0px;
  padding:0px;
  position:relative;
`

const Stars = styled.div`
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  font-size: 11px;
  margin:0px;
  padding:0px;
  position:relative;
`

function Current (props) {
  var id = props.movie._id;
  var picture = props.movie.pictureURL;
  var title = props.movie.title.slice(0, 25);
  var year = props.movie.year.toString().slice(0,4);
  year = parseInt(year);
  var description = props.movie.description;
  var rating = props.movie.rating;
  var splitGenre = props.movie.genre.split(',');
  var genre = splitGenre.join('|');
  var starRating = props.movie.starRating;
  var director = props.movie.director;
  var movieStars = props.movie.stars;

  var click = props.click;

  var clickStar = props.starClick;
  var hover = props.hover;


  return (
    <CurrentDiv>
      <CurrentMovie id='current'>
        <img src={picture} height="100%" width="100%" />
        <Button className='addToBtn'>Add to Watchlist</Button>
        <Button className='nextBtn' onClick={click}> Next >> </Button>
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
        <StarRating rating={starRating} movieId={id} clickStar={clickStar} />

        <Description>{description}</Description>
        <Directors><b>Directors: </b>{director}</Directors>
        <Stars><b>Stars: </b>{movieStars}</Stars>

      </MovieInfo>
    </CurrentDiv>

  )
}


export default Current;
