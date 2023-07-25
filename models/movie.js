const { mongoose, Schema } = require('mongoose');
const validationRegex = require('../utils/validationRegex');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: validationRegex,
    },
    trailerLink: {
      type: String,
      required: true,
      validate: validationRegex,
    },
    thumbnail: {
      type: String,
      required: true,
      validate: validationRegex,
    },
    owner: {
      type: Schema.Types.ObjectId,
      reference: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);
