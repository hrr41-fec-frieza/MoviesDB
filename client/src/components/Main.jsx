import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import Movie from './Movie.jsx';
import Current from './Current.jsx';

// const theme = {
//   color: "red",
// }

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
const LearnMore = styled.a`
  font-size: 11px;
  width: 16.33;
  height: 13.33;
  margin-right: 30px;
  padding: 5px;
  border-left: 1px dotted #CCC;
  height: 15px;
`

const Title = styled.h2`
  width: auto;
  height: auto;
  margin: 5px;
  font: 24px Arial, sans-serif;
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

const PageTurnLeft = styled.a`
  color: #CCC;
  margin-right: 5px;
`

const PageTurnRight = styled.a`
  color: blue;
  margin-left: 5px;

`



class Main extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      movies: []

    }
    this.clickMovie = this.clickMovie.bind(this);
  }

  getAllMovies() {

    axios.get('/api/morelikethis')
      .then(response => {
        if (response.status === 200) {

          this.setState({
            current:response.data[0],
            movies: response.data.splice(1)
          });
        }
      })

  }

  clickMovie(e) {
    e.preventDefault();

    var key = e.target.key;
    console.log("e.target.key---> " + e.target.key );
    // console.log("type of e.target.movie---> " + typeof e.target.movie );
    // console.log("e.target.index---> " + e.target.index );

    // var updatedMovies = this.state.movies;
    // updatedMovies.push(this.state.current);
    // var updatedCurrent = e.target.value;

    // console.log(updatedMovies);
    // console.log(updatedCurrent);
  }

  componentDidMount(){
    this.getAllMovies();
  }

  renderCurrentMovie(){
    if (this.state.current === null) {
      return null;
    } else {
      return (
        <Current id='current' movie={this.state.current}/>
      )
    }
  }

  render() {
    return (
      <div id='app'>
        <Header>
          <Title>More Like This</Title>
          <LearnMore><a></a>Learn More</LearnMore>
        </Header>

        <MainContainer className="maincomponent">
          <RelatedDiv>
            <RelatedMovies>
              {this.state.movies.map((movie, i) =>
                <Movie key={i} movie={movie} clicky={this.clickMovie} />
              )}
              <PageTurners>
                <PageTurnLeft>◄ Prev 6 </PageTurnLeft>
                <PageTurnRight> Next 6  ►</PageTurnRight>
              </PageTurners>

            </RelatedMovies>

          </RelatedDiv>

          {this.renderCurrentMovie()}
        </MainContainer>
      </div>
    );


  }
}

export default Main;

