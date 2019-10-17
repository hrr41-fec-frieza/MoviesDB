import React, {Componenet} from 'react';


const RatingBar = styled.div`
  background-color: pink;
`

const Stars = styled.div`
  border: 1px solid blue;
`


function StarRating(props) {
  constructor(props) {
    super(props)

    this.state = {
      rating: 0
    }

  }

  render (
    return (
      <RatingBar>
        <Stars>
          <span id="star1">☆</span>
          <span id="star2">☆</span>
          <span id="star3">☆</span>
          <span id="star4">☆</span>
          <span id="star5">☆</span>
          <span id="star6">☆</span>
          <span id="star7">☆</span>
          <span id="star8">☆</span>
          <span id="star9">☆</span>
          <span id="star10">☆</span>
        </Stars>
      </RatingBar>
    )
  )

}

export default StarRating;