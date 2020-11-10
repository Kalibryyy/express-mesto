const readFile = require('../utils/read-file');
path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) => {
  readFile(pathToData)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(404).send({
      message: 'Нет такого файла'
    });
  });
}