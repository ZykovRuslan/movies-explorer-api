const http2 = require('http2');
const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const ForbiddenError = require('../errors/ForbiddenError');

function getMovies(req, res, next) {
  const userId = req.user._id;

  Movie.find({ owner: userId }).populate('owner')
    .then((movies) => {
      res.status(http2.constants.HTTP_STATUS_OK).send(movies);
    })
    .catch((err) => {
      next(err);
    });
}

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.create({
    ...req.body,
    owner,
  })
    .then((newMovie) => {
      res.status(http2.constants.HTTP_STATUS_CREATED).send(newMovie);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        throw new ValidationError(`Пожалуйста, проверьте правильность заполнения полей:
        ${Object.values(error.errors).map((err) => `${err.message.slice(5)}`).join(' ')}`);
      } else {
        next(error);
      }
    })
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(`Фильм с указанным id: ${movieId} не найдена.`);
      } else if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Недостаточно прав для удаления фильма.');
      } else {
        return Movie.findByIdAndRemove(movieId)
          .then((removedMovie) => res.status(http2.constants.HTTP_STATUS_OK).send(removedMovie))
          .catch((error) => {
            next(error);
          });
      }
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        throw new BadRequestError(`Фильм с указанным id: ${movieId} не существует в базе данных.`);
      } else {
        next(error);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};
