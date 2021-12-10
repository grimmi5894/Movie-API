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

module.exports = { getAllMovies, getMovieByTitleOrDirector }
