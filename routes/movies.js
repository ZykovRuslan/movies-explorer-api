const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovies, createMovie, deleteMovieById } = require('../controllers/movies');
const validationRegex = require('../utils/validationRegex');

router.get('/', getMovies);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().regex(validationRegex),
      trailerLink: Joi.string().required().regex(validationRegex),
      thumbnail: Joi.string().required().regex(validationRegex),
      movieId: Joi.number().integer().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  }),
  createMovie,
);

router.delete(
  '/:movieId',
  celebrate({
    params: Joi.object().keys({
      movieId: Joi.string().alphanum().length(24).hex()
        .required(),
    }),
  }),
  deleteMovieById,
);

module.exports = router;
