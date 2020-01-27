import styled from 'styled-components';

const MainContainer = styled.div`
  width: 625px;
  height: 265px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: right;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const LearnMore = styled.span`
  font-size: 11px;
  color: blue;
  text-decoration: underline;
  width: 16.33;
  height: 13.33;
  margin-right: 30px;
  padding: 5px;
  border-left: 1px dotted #CCC;
  height: 15px;
  cursor: pointer;
`

const Title = styled.span`
  width: auto;
  height: auto;
  margin: 5px;
  font-size: 24px;
  font-family: Arial, sans-serif;
  color: #424242fa;

`
const RelatedDiv = styled.div`
  height: 290px;
`

const RelatedMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 246px;
  height: 238px;


`
const PageTurners = styled.div`
  margin: 4px;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PageTurnLeft = styled.span`
  cursor: pointer;
  color: ${props => props.page === 'left' ? '#CCC' : 'blue'};
  margin-right: 5px;
`

const PageTurnRight = styled.span`
  cursor: pointer;
  color: ${props => props.page === 'left' ? 'blue' : '#CCC'};
  margin-left: 5px;
`
const MoviesContainer = styled.div`
  overflow: hidden;
`

export {
  MainContainer,
  Header,
  LearnMore,
  Title,
  RelatedDiv,
  RelatedMovies,
  PageTurners,
  PageTurnLeft,
  PageTurnRight,
  MoviesContainer
}