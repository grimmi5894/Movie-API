/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitleOrDirector, saveNewMovie } = require('./controller/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:titleOrDirector', getMovieByTitleOrDirector)

app.use(bodyParser.json())

app.post('/movies', saveNewMovie)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
