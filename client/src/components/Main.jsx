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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

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
        <Current movie={this.state.current}/>
      )
    }
  }

  render() {
    return (
      <div id='app'>
        <h1>More Like This</h1>
        <MainContainer>
          <div id='relatedmovies'>
            {this.state.movies.map((movie, i) =>
              <Movie key={i} movie={movie} clicky={this.clickMovie} />
            )}

          </div>
          {this.renderCurrentMovie()}
        </MainContainer>
      </div>
    );


  }
}

export default Main;
