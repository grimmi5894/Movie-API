/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitle } = require('./controller/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:title', getMovieByTitle)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
