const router = require('express').Router();
const readFile = require('../utils/read-file');
path = require('path');
const pathToData = path.join(__dirname, '..', 'data', 'users.json');

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

router.get('/:id', (req, res) => {
const { id } = req.params; 

readFile(pathToData)
  .then(data => {
    const user = data.find(item => {
      console.log(item);
      return item._id === id;
    })
    if (!user) {
      return res.status(404).send({
        "message": "Нет пользователя с таким id"
      });
    }

    res.send(user);
  })
  .catch(err => {
    res.status(404).send({
      message: 'Нет такого файла'
    });
  });
});

module.exports = router;