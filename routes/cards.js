const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Cards route');
});

module.exports = router;