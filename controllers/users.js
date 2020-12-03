const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ message: 'страница не найдена' });
      } else if (err.name === 'DisconnectedError') {
        res.status(503).send({ message: 'нет соединения с базой данных' });
      } else {
        res.status(500).send({ message: 'Ошибка сервера', error: err });
      }
    });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
  .orFail(() => {
    const error404 = new Error('Нет пользователя с таким id')
    error404.statusCode = 404
    throw error404
  })
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((err) => {
    if (err.statusCode === 404) {
      res.status(404).send({ message: err.message }) 
    } else if (err.name === 'ValidationError') {
      res.status(400).send({ message: err.message });
    } else if (err.name === 'DocumentNotFoundError') {
      res.status(404).send({ message: 'пользователь не найден' });
    } else if (err.name === 'CastError') {
      res.status(422).send({ message: 'в запросе переданы значения неправильного типа' });
    } else if (err.name === 'DisconnectedError') {
      res.status(503).send({ message: 'нет соединения с базой данных' });
    } else {
      res.status(500).send({ message: 'Ошибка сервера', error: err });
    }
  });
};

module.exports.createUser = (req,res) => {
  const { name, about, avatar } = req.body; 

  User.create({ name, about, avatar })
    .then((user) => {
      res.send({ data: user })
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}