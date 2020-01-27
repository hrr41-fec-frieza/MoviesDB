var Movie = require('./database/index.js').Movie;
var db = require('./database/index.js').db;
var mongoose = require('mongoose');
var faker = require('faker');

var ratings = ['G', 'PG', 'PG-13', 'R']
var genres = ['Adventure', 'Romance', 'Comedy', 'Thriller', 'Horror', 'Kids', 'Sci-Fi', 'Action', 'Drama', 'Documentary'];
var imageCategories = [faker.image.abstract(), faker.image.animals(), faker.image.business(), faker.image.cats(), faker.image.cats(), faker.image.food(), faker.image.nightlife(),faker.image.fashion(), faker.image.people(), faker.image.people(), faker.image.sports(), faker.image.technics()];

var NewMovie = function () {
    this.movieKey = 0,
    this.title = faker.company.catchPhrase().slice(0, 20),
    this.year = Math.floor(Math.random() * (2019 - 1960 + 1)) + 1960;
    this.rating = ratings[Math.floor(Math.random()*ratings.length)],
    this.genre = genres[Math.floor(Math.random()*genres.length)] + ', ' + genres[Math.floor(Math.random()*genres.length)] + ', ' + genres[Math.floor(Math.random()*genres.length)],
    this.starRating = (Math.floor(Math.random()*10)),
    this.description = faker.lorem.paragraph(),
    this.director = "H.O.",
    this.stars = faker.name.findName() + ", " + faker.name.findName(),
    this.pictureURL = `https://picsum.photos/id/${Math.floor(Math.random()*200)}/200/300`
}

//empty database before reseeding
db.dropDatabase();

for (var i = 100; i < 200; i++) {
  for (var j = 0; j < 12; j++) {
    var movie = new NewMovie();
    movie.movieKey = i;
    var thisMovie = new Movie(movie);

    thisMovie.save((err, result) => {
      if (err) {
        console.log("Error saving movie: ", err)
      }
    });
  }
}

