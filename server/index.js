const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
require('dotenv/config')
const cors = require('cors');

const app = express();
const port = 3030;
app.use(cors());

app.use(express.static(__dirname + './../client/dist'));
//
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
      console.log('app.get success');
      res.status(202);
      res.send(movies);
    }
  })
})


app.listen(port, () => {
  console.log(process.env.MESSAGE);
  console.log('server listening on port: ', port)
})
