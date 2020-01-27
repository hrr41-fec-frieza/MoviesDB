import React from 'react';

import StarRating from './StarRating.jsx';
import {
  CurrentMovie,
  Button,
  MovieInfo,
  CurrentDiv,
  Title,
  Year,
  TitleYear,
  Rating,
  Genre,
  RatingGenre,
  Description,
  Directors,
  Stars
} from './componentStyling/CurrentStyling.js';

function Current ({ _id, movie: { pictureURL, title, year, description, rating, genre, starRating, director, stars }, click, starClick, hover }) {

  return (
    <CurrentDiv>

      <CurrentMovie id='current'>
        <img src={pictureURL} height="100%" width="100%" />
        <Button className='addToBtn'>Add to Watchlist</Button>
        <Button className='nextBtn' onClick={click}> Next >> </Button>
      </CurrentMovie>

      <MovieInfo>
        <TitleYear>
          <Title>{title.slice(0, 25)} </Title>
          <Year>({parseInt(year.toString().slice(0, 4))})</Year>
        </TitleYear>

        <RatingGenre>
          <Rating>{rating}</Rating>
          <Genre>{genre.split(',').join('|')}</Genre>
        </RatingGenre>

        <StarRating rating={starRating} movieId={_id} clickStar={starClick} />

        <Description>{description}</Description>
        <Directors><b>Directors: </b>{director}</Directors>
        <Stars><b>Stars: </b>{stars}</Stars>

      </MovieInfo>

    </CurrentDiv>
  )
}

export default Current;
