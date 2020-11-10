const router = require('express').Router();
const readFile = require('../utils/read-file');
path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res) => {
  readFile(pathToData)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(404).send({
      message: 'Нет такого файла'
    });
  });
});

module.exports = router;