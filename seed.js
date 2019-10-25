var Movie = require('./database/index.js').Movie;
var db = require('./database/index.js').db;
var mongoose = require('mongoose');
var faker = require('faker');

var ratings = ['G', 'PG', 'PG-13', 'R']
var genres = ['Adventure', 'Romance', 'Comedy', 'Thriller', 'Horror', 'Kids', 'Scienc-fiction', 'Action', 'Drama', 'Documentary'];
var imageCategories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife','fashion', 'people', 'nature', 'sports', 'technics'];

<<<<<<< HEAD
var NewMovie = function () {
    this.movieKey = 0,
    this.title = faker.company.catchPhrase(),
    this.year = faker.date.recent(),
    this.rating = ratings[Math.floor(Math.random()*ratings.length)],
    this.genre = genres[Math.floor(Math.random()*genres.length)] + ', ' + genres[Math.floor(Math.random()*genres.length)] + ', ' + genres[Math.floor(Math.random()*genres.length)],
    this.starRating = (Math.floor(Math.random()*10)),
    this.description = faker.lorem.paragraph(),
    this.director = "HO",
    this.stars = faker.name.findName() + ", " + faker.name.findName(),
    this.pictureURL = faker.image.city();
=======
var newMovies = [
  {
    "_id": "5daa22537ab70704ce0fee62",
    "title": "Cows THE MOVIE",
    "year": 1993,
    "rating": "R",
    "genre": "Adventure, Comedy",
    "starRating": 10,
    "description": "Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie. Cows make a movie.",
    "director": "HO",
    "stars": "Cow1, Cow2, Sally",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/3091466.large.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee63",
    "title": "To Be Butchered Another Day",
    "year": 1994,
    "rating": "R",
    "genre": "adventure",
    "starRating": 8,
    "description": "Cow are back in town!",
    "director": "HO",
    "stars": "Cow1, Barry, Cow2",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/cow-1715829__340.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee64",
    "title": "The Sound of Moo-sic",
    "year": 2019,
    "rating": "R",
    "genre": "Musical, Drama",
    "starRating": 9,
    "description": "The remaking of the classic 'Sound of Music', finally done properly.",
    "director": "HO",
    "stars": "Cowly, Cowsy",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/cow-2896329_960_720.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee65",
    "title": "You Be My Patty, I'll Be Your Buns",
    "year": 2003,
    "rating": "R",
    "genre": "romance",
    "starRating": 7,
    "description": "The new titanic! Cow romance like never seen before.",
    "director": "HO",
    "stars": "Mr Cow, Mrs Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/thjc-cow-2.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee66",
    "title": "The Cowgalry",
    "year": 2011,
    "rating": "PG-13",
    "genre": "war",
    "starRating": 11,
    "description": "The Cowgalry goes off to war, but will everyone make it back safely?",
    "director": "HO",
    "stars": "CowCow, Mr C",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/tumblr_oplgjdcYJl1sgqqono1_500.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee67",
    "title": "Cows 3: Pourin' Dat Milk",
    "year": 2007,
    "rating": "R",
    "genre": "adventure",
    "starRating": 8,
    "description": "Cows learn how to drink milk.",
    "director": "HO",
    "stars": "Sarah, The Other Sarah",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/new1.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee68",
    "title": "Utterly Ridiculous",
    "year": 1999,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Matt Cow, Other Matt Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/new2.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee69",
    "title": "The Tails of Sir Loin",
    "year": 2011,
    "rating": "G",
    "genre": "Rom-Com",
    "starRating": 5,
    "description": "They've done it again! These gal-cows have left the field and are back out in search of their one utter love.",
    "director": "HO",
    "stars": "Missy Cow, Lady Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c6.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee6a",
    "title": "Seen But Not Herd",
    "year": 2016,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Fergie, ",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c5.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee6b",
    "title": "High Steaks",
    "year": 2018,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Matt Cow, Other Matt Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c4.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee6c",
    "title": "He is Not A-moosed",
    "year": 2014,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Matt Cow, Other Matt Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c3.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee6d",
    "title": "Dont Steer Me Wrong",
    "year": 2003,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Matt Cow, Other Matt Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c2.jpg",
    "__v": 0
  },
  {
    "_id": "5daa22537ab70704ce0fee6e",
    "title": "Deja Moo",
    "year": 2019,
    "rating": "PG-13",
    "genre": "adventure",
    "starRating": 9,
    "description": "What?! REALLY!?",
    "director": "HO",
    "stars": "Matt Cow, Other Matt Cow",
    "pictureURL": "https://mooviesdb.s3-us-west-2.amazonaws.com/c1.jpg",
    "__v": 0
>>>>>>> master
  }

//empty database before reseeding
db.dropDatabase();

db.dropDatabase();

for (var i = 100; i < 200; i++) {
  for (var j = 0; j < 12; j++) {
    var movie = new NewMovie();

    movie.movieKey = i;
    // movie.pictureURL = `faker.image.${imageCategories[Math.floor(Math.random()*imageCategories.length)]}`();

    var thisMovie = new Movie(movie);
    thisMovie.save((err, result) => {
      if (err) {
        console.log("Error saving movie: ", err)
      }
    });
  }
}

