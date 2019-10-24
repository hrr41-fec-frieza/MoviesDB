const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
require('dotenv/config')
const cors = require('cors');

const app = express();
const port = 3030;
app.use(cors());

app.use(express.static(__dirname + './../client/dist'));


app.get('/api/morelikethis', (req,res) => {
  db.getAllMovies((err, movies) => {
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
