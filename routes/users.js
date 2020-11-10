const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Users route');
});

router.get('/:id', (req, res) => {
  const { id } = req.params; // { id: ... }
  // if (!users[id]) {
  //   res.status(404).send({
  //     "message": "Нет пользователя с таким id"
  //   });

  //   return;
  // }
  res.send(`Users route with id: ${id}`);
});

module.exports = router;