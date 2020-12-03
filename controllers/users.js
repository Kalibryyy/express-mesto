const User = require('../models/user');
const { errorHandler } = require('../utils/error-handler');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => errorHandler(res, err));
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .orFail(() => {
      const error404 = new Error('Нет пользователя с таким id');
      error404.statusCode = 404;
      throw error404;
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => errorHandler(res, err));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => errorHandler(res, err));
};
