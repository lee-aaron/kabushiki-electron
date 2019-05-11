const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/test', (req, res) => {
  res.send('Welcome to your express API');
});

app.listen(5000, () => console.log('App running on port 5000 🔥'));