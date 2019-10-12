var Movie = require('./database/index.js').Movie;
var db = require('./database/index.js').db;
var mongoose = require('mongoose');


var newMovies = [
  {
    "id": 1,
    "title": "Heck Yeah the Movie",
    "year": 1993,
    "rating": "R",
    "genre": "adventures of..",
    "starRating": 10,
    "description": "Haley figures out life... maybe",
    "director": "HO",
    "stars": "Me",
    "pictureURL": "https://vetstreet.brightspotcdn.com/dims4/default/60b6ebe/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F1b%2F10%2F187d796e44db9b3262b45d2e5aac%2Fdog-makes-eye-contact-thinkstockphotos-511375254-590lc031616.jpg"
  },
  {
    "id": 2,
    "title": "Movie 2",
    "year": 2019,
    "rating": "R",
    "genre": "adventures of..",
    "starRating": 9,
    "description": "Haley figures out life... someday",
    "director": "HO",
    "stars": "Me",
    "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvx4H9VUNRT9c8b0Ez8spebrtUMGjE44QlrPBXERQ1SHN6iwt8Q&s"
  },
  {
    "id": 3,
    "title": "Third Movie",
    "year": 2003,
    "rating": "R",
    "genre": "adventures of..",
    "starRating": 7,
    "description": "Haley figures out life... eventually",
    "director": "HO",
    "stars": "Me",
    "pictureURL": "https://www.allthingsdogs.com/wp-content/uploads/2019/01/Miniature-German-Shepherd-Feature.jpgO"
  }
]

var saves = 0;
for (var i = 0; i < newMovies.length; i++) {

  var thisMovie = new Movie(newMovies[i]);

  thisMovie.save((err, result) => {
    if (err) {
      console.log("Error saving movie: ", error)
    }
    saves++;

  });
}
