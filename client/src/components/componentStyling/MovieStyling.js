import styled from 'styled-components';

const MoviesDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 246px;
height: 238px;
overflow: hidden;
`
const Movie = styled.div`
width: 30%;
margin: auto;
cursor: pointer;
`

export { MoviesDiv, Movie };