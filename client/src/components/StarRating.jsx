import React from 'react';

import {
  RatingBar,
  Stars,
  Star,
  EmptyStar,
  Rating,
  TopRating
} from './componentStyling/StarRatingStyling.js';


function StarRating ({ rating, clickStar, movieId, hover}) {
  var stars = [];

    var i = 1;
    while (i <= rating) {
      var starId = i;
      stars.push(
        <Star id={starId} key={starId} onClick={clickStar} onMouseOver={hover}>
          <span id={starId}>⭐</span>
        </Star>);

      i++;
    }
    while (i <= 10) {
      var starId = i;
      stars.push(
        <EmptyStar id={starId} key={starId} onClick={clickStar}>
          <span id={starId}>☆</span>
        </EmptyStar>)

      i++
    }

  return (
    <RatingBar>

      <Stars>
        {stars}
      </Stars>

      <Rating>{rating}
        <TopRating>/10</TopRating>
      </Rating>

    </RatingBar>
  )
}

export default StarRating;