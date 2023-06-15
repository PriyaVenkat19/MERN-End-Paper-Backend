const express = require('express');
const app = express();
const path = require('path');
const data = require('./movies/movie.json');
const cors=require('cors')
app.use(cors())
app.get('/api/data', (req, res) => {
  const imagePath = path.join(__dirname, 'movies/img/img1.jpg');
  res.sendFile(imagePath);
});

app.get('/api/data/json', (req, res) => {
  res.json(data);
});

app.listen(3001);
