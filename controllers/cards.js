const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send({data: cards});
    })
    .catch(() => {
      res.status(404).send({
        message: 'Нет такого файла',
      });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id }) 
  .then((card) => {
    res.send({ data: card })
  })
  .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
  .then((card) => {
    res.send({ data: card })
  })
  .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
