import React, {Componenet} from 'react';
import styled from 'styled-components';


const RatingBar = styled.div`
  border: 1px solid #efefef;
  border-radius: 6px;
  padding: 3px 3px 8px 4px;
  width: 198px;
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
`
const Rating = styled.a`
  color: orange;
  margin-left: 5px;
  text-align: right;
  font-weight: bold;
  color: #a58600;
  font-size: 14px;

`

const TopRating = styled.a`
  color: #CCC;
  font-size: 14px;

`


class StarRating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 8.5
    }
  }

  render () {
    return (
      <RatingBar>
        <Stars>
          <Star id="star1">&#9734;</Star>
          <Star id="star2">&#9734;</Star>
          <Star id="star3">&#9734;</Star>
          <Star id="star4">&#9734;</Star>
          <Star id="star5">&#9734;</Star>
          <Star id="star6">&#9734;</Star>
          <Star id="star7">&#9734;</Star>
          <Star id="star8">&#9734;</Star>
          <Star id="star9">&#9734;</Star>
          <Star id="star10">&#9734;</Star>
        </Stars>
        <Rating>{this.state.rating}</Rating>
        <TopRating>/10</TopRating>
      </RatingBar>
    )
  }

}

export default StarRating;