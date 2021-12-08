const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitle = (request, response) => {
  const { title } = request.params
  const foundTitle = movies.filter((movie) => {
    return movie.title.includes(title)
  })

  return response.send(foundTitle)
}

module.exports = { getAllMovies, getMovieByTitle }
