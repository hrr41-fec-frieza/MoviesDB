import React from 'react';
import styled from 'styled-components';
// const {styled} = window;
import axios from 'axios';

import { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';


import Movies from './Movies.jsx';
import Current from './Current.jsx';

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



class Main extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      leftPageMovies: [],
      rightPageMovies: [],
      displayPage: 'left'
    }
    this.clickMovie = this.clickMovie.bind(this);
    this.clickPageLeft = this.clickPageLeft.bind(this);
    this.clickPageRight = this.clickPageRight.bind(this);
    this.clickNextMovie = this.clickNextMovie.bind(this);

    this.clickRating = this.clickRating.bind(this);
    this.hoverStar = this.hoverStar.bind(this);
  }

  getAllMovies(path) {
  if (path ==='/') {
     axios.get('http://localhost:3030/api/morelikethis')
      .then(response => {

        if (response.status === 202) {
          var first = response.data[0];
          var leftPage = response.data.slice(0, 6);
          var rightPage = response.data.slice(6, 12);

          this.setState({
            current: first,
            leftPageMovies: leftPage,
            rightPageMovies: rightPage
          });
        }
      }).catch(error => {
        console.log(error.response)
      })
    } else {
      path = path.slice(2);
      axios.get(`http://localhost:3030/api/morelikethis/?id=${path}`)
      .then(response => {

        if (response.status === 202) {
          var first = response.data[0];
          var leftPage = response.data.slice(0, 6);
          var rightPage = response.data.slice(6, 12);

          var first = response.data[0];
          var leftPage = response.data.slice(0, 6);
          var rightPage = response.data.slice(6, 12);

          this.setState({
            current: first,
            leftPageMovies: leftPage,
            rightPageMovies: rightPage
          });
        }
      }).catch(error => {
        console.log(error.response)
      })

    }
  }

  clickRating(e) {
    e.preventDefault();

    var rating = e.target.id;
    var current = this.state.current;
    current.starRating = rating;
    this.setState({
      current: current
    })
  }

  clickMovie(e) {
    e.preventDefault();
    var movieId = e.target.id;

    var newCurrent = (this.state.displayPage === 'left' ? this.state.leftPageMovies.find( ({ _id }) => _id === movieId) : this.state.rightPageMovies.find( ({ _id }) => _id === movieId));

    this.setState({
      current: newCurrent
    })
  }

  clickNextMovie(e) {

    var currentIndex = this.state.displayPage === 'left' ? this.state.leftPageMovies.indexOf(this.state.current) : this.state.rightPageMovies.indexOf(this.state.current);

    var next = this.state.displayPage === 'left' ? this.state.leftPageMovies[currentIndex + 1] : this.state.rightPageMovies[currentIndex + 1];

    if (next === undefined) {
      this.state.displayPage === 'left' ?
        this.setState({
          displayPage: 'right',
          current: this.state.rightPageMovies[0]
        }) : this.setState({
            displayPage: 'left',
            current: this.state.leftPageMovies[0]
        })
    } else {
      this.setState({
        current: next
      })
    }

  }

  clickPageRight(e) {
    e.preventDefault();

    this.setState({
      displayPage: 'right',
      current: this.state.rightPageMovies[0]
    })
  }

  clickPageLeft(e) {
    e.preventDefault();

    this.setState({
      displayPage: 'left',
      current: this.state.leftPageMovies[0]
    })
  }

  hoverStar(e) {
    e.preventDefault();

  }
  componentDidMount(){
    var path = location.href.slice(21);
    console.log('location.href: ', path)
    this.getAllMovies(path);
  }

  renderCurrentMovie(){
    if (this.state.current === null) {
      return null;
    } else {
      return (

        <Current id='current' movie={this.state.current} click={this.clickNextMovie} starClick={this.clickRating} hover={this.hoverStar}/>
      )
    }
  }

  render() {
    return (
      <div id='app'>
        <Header>

          <Title>More Like This</Title>
          <LearnMore><a>Learn More</a></LearnMore>

        </Header>

        <MainContainer className="maincomponent">
          <RelatedDiv>
            <RelatedMovies>

              <TransitionGroup>
                <CSSTransition
                  in={ true }
                  appear={ false }
                  key={this.state.displayPage}
                  timeout={ 5000 }
                  classNames={ "pagechange" }>

                  <Movies click={this.clickMovie} movies={this.state.displayPage === 'left' ? this.state.leftPageMovies : this.state.rightPageMovies} />

                </CSSTransition>
              </TransitionGroup>

              <PageTurners>
                <PageTurnLeft onClick={this.clickPageLeft} page={this.state.displayPage}>◄ Prev 6 </PageTurnLeft>
                <PageTurnRight onClick={this.clickPageRight} page={this.state.displayPage}> Next 6  ►</PageTurnRight>
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

