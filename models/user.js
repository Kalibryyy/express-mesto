const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: [true, 'User picture link is required'],
    minlength: 2,
    maxlength: 30,
    validate: {
      validator(v) {
        return /^https?:\/\/w{0,3}\.?[\wа-яё/\-.]{0,}#?$/gi.test(v);
      },
      message: 'Здесь должна быть ссылка',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
