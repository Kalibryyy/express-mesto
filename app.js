const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();
const path = require('path');
const routers = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routers);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
