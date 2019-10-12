import React from 'react';
import axios from 'axios';
import Movie from './Movie.jsx';

class Main extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.getAllMovies = this.getAllMovies.bind(this);
  }

  getAllMovies() {

    axios.get('/api/morelikethis')
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.setState({
            movies: response.data
          });
        }
      })
      console.log(this.state.movies)
  }

  componentDidMount(){
    this.getAllMovies();
  }


  render() {
    return (
      <div className='Main'>
        <h1>Main Component</h1>
        <div id='movieList'>
          {this.state.movies.map((movie, i) =>
            <Movie key={i} movie={movie} />
          )}

        </div>
      </div>
    );
  }
}

export default Main;
