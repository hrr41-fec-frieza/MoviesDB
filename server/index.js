const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(__dirname + './../client/dist'));

app.get('/', (req, res) => {
  res.send('Get is working')
})

app.get('/api/morelikethis', (req,res) => {
  db.getAllMovies((err, movies) => {
    if (err) {
      console.log('app.get err: ', err);
    } else {
      console.log('app.get success');
      res.send(movies);
    }
  })
})


app.listen(port, () => {
  console.log('server listening on port: ', port)
})
