const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/morelikethis');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
})

let MovieSchema = mongoose.Schema({
  movieKey: Number,
  title: {type: String, required: true},
  year: Number,
  rating: String,
  genre: String,
  starRating: Number,
  description: String,
  director: String,
  stars: String,
  pictureURL: String
})

let Movie = mongoose.model('Movie', MovieSchema);

const getAllMovies = (movieKey, callback) => {

  Movie.find( {"movieKey": movieKey}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results)
    }
  })
}

module.exports = {
  Movie,
  db,
  getAllMovies
};
