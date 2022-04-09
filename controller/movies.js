const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitleOrDirector = (request, response) => {
  const { titleOrDirector } = request.params
  const foundMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(titleOrDirector) ||
      movie.directors.toString().toLowerCase().includes(titleOrDirector)
  })

  return response.send(foundMovies)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('All fields are required. Please check data and try again')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovieByTitleOrDirector, saveNewMovie }
