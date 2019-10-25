import React, {Componenet} from 'react';
import styled from 'styled-components';
// const {styled} = window;


const RatingBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: stretch;
  border: 1px solid #efefef;
  border-radius: 6px;
  padding: 3px 3px 8px 4px;
  width: auto;
  height: 13px;
  font-size: 11px;
  margin: 3px;

`

const Stars = styled.div`
  font-size: 15px;
  float: left;


`
const Star = styled.span`
  padding: 6px 1px 6px 1px;
  font-size: 8px;
  padding-bottom: 5px;
  cursor: pointer;
`
const EmptyStar = styled.span`
  padding: 6px 1px 6px 1px;
  font-size: 13px;
  margin-bottom: 5px;
  cursor: pointer;

`

const Rating = styled.span`
  color: orange;
  margin-left: 5px;
  text-align: right;
  font-weight: bold;
  color: #a58600;
  font-size: 14px;

`

const TopRating = styled.span`
  color: #CCC;
  font-size: 14px;
  padding-bottom: 5px;
`


function StarRating (props) {
  var rating = props.rating;
  var click = props.clickStar;
  var movieId = props.movieId;
  var hover = props.hover;

  var stars = [];

    var i = 0;
    while (i < rating) {
      var starId = i;
      stars.push(
        <Star id={movieId} key={starId} onClick={click} onMouseOver={hover}>
          <span id={starId}>⭐</span>
        </Star>);

      i++;
    }
    while (i < 10) {
      var starId = i;
      stars.push(
        <EmptyStar id={movieId} key={starId} onClick={click}>
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

// const Moviee = styled.div`
//   background-color: green;
//   &:hover{
//     background-color: red;
//     margin: 5px;
//   }
// `;
