const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.listen(PORT, _ => console.log(`App listening on port ${PORT}`));