require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');
var morgan = require('morgan');

const app = express();
const port = 3030;
app.use(cors());

app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.get('/api/morelikethis', (req,res) => {
  if (req.url === '/api/morelikethis') {
    movieKey = 100;
  } else {
    movieKey = req.query.id;
  }

  db.getAllMovies(movieKey, (err, movies) => {

    if (err) {
      res.sendStatus(404);
      console.log('app.get err: ', err);
    } else {
      res.status(202);
      res.send(movies);
    }
  })
})
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(process.env.MESSAGE);
  console.log('server listening on port: ', port)
})
