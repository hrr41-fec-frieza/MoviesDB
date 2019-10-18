import React from 'react';
import styled from 'styled-components';



const OneMovie = styled.div`
  width:30%;
  margin: auto;
`


function Movie (props) {
  var pic = props.movie.pictureURL;
  var id = props.key;
  var clicky = props.clicky;

  return (
    <OneMovie  onClick={clicky} >
      <img src={pic} height="113" width="76" />
    </OneMovie>
  )

}

// const Moviee = styled.div`
//   background-color: green;
//   &:hover{
//     background-color: red;
//     margin: 5px;
//   }
// `;

// function Movie({movie, click, key}) {
//   var pic = movie.pictureURL;
//   console.log(movie._id)
//   return (
//     <Moviee>
//       <img src={pic} height="50" width="25" key={movie._id} onClick={click}/>
//     </Moviee>
//   )
// }

export default Movie;
