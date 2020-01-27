import React from 'react';
import axios from 'axios';

import { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';

import {
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
} from './componentStyling/MainStyling.js';

import Movies from './Movies.jsx';
import Current from './Current.jsx';


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
  }


  //retrieve related movies from db
  getAllMovies (path) {
  if (path ==='/') {
     axios.get('http://localhost:3030/api/morelikethis')
      .then(response => {

        if (response.status === 202) {
          this.updateState(response);
        }

      }).catch(error => {
        console.log(error.response)
      })


    //if specified id
    } else {
      path = path.slice(5);
      axios.get(`http://localhost:3030/api/morelikethis/?id=${path}`)
      .then(response => {

        if (response.status === 202) {
          this.updateState(response);
        }

      }).catch(error => {
        console.log(error.response)
      })
    }
  }


  updateState (response) {
    var first = response.data[0];
          var leftPage = response.data.slice(0, 6);
          var rightPage = response.data.slice(6, 12);

          this.setState({
            current: first,
            leftPageMovies: leftPage,
            rightPageMovies: rightPage
          });
  }


  //change star rating on click
  clickRating (e) {
    e.preventDefault();

    var rating = e.target.id;
    var current = this.state.current;
    current.starRating = rating;

    this.setState({
      current: current
    })
  }


  //Display movie and details on click
  clickMovie (e) {
    e.preventDefault();
    var movieId = e.target.id;

    var newCurrent = (this.state.displayPage === 'left' ? this.state.leftPageMovies.find( ({ _id }) => _id === movieId) : this.state.rightPageMovies.find( ({ _id }) => _id === movieId));

    this.setState({
      current: newCurrent
    })
  }


  //"Next" button to move to next related movie
  clickNextMovie (e) {
    var currentIndex = this.state.displayPage === 'left' ? this.state.leftPageMovies.indexOf(this.state.current) : this.state.rightPageMovies.indexOf(this.state.current);

    var next = this.state.displayPage === 'left' ? this.state.leftPageMovies[currentIndex + 1] : this.state.rightPageMovies[currentIndex + 1];

    //if at end of current page, move to next page
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


  //"Next 6" button
  clickPageRight (e) {
    e.preventDefault();

    this.setState({
      displayPage: 'right',
      current: this.state.rightPageMovies[0]
    })
  }


  //"Prev 6" button
  clickPageLeft (e) {
    e.preventDefault();

    this.setState({
      displayPage: 'left',
      current: this.state.leftPageMovies[0]
    })
  }


  //set movie to focus on (with details/info)
  renderCurrentMovie () {
    //display none before retrieved from db
    if (this.state.current === null) {
      return null;
    } else {
      return (
        <Current id='current' movie={this.state.current} click={this.clickNextMovie} starClick={this.clickRating}/>
      )
    }
  }


  //When component mounts, get path from url, and get movies from db
  componentDidMount () {
    var path = location.href.slice(21);
    this.getAllMovies(path);
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

              <MoviesContainer>
                <TransitionGroup>
                  <CSSTransition

                    in={ true }
                    appear={ false }
                    key={this.state.displayPage}
                    timeout={ 400 }
                    classNames={ "pagechange" }>

                    <Movies click={this.clickMovie} movies={this.state.displayPage === 'left' ? this.state.leftPageMovies : this.state.rightPageMovies} />

                  </CSSTransition>
                </TransitionGroup>
              </MoviesContainer>

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

