const fs = require('fs');
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary' }));


app.listen(port, () => {
  console.log(`Server is up and running on port :${port}`);
});

