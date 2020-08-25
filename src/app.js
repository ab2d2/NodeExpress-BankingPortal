const fs = require('fs');
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

const accountData = fs.readFileSync(path.resolve(__dirname, 'json/accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.resolve(__dirname, 'json/users.json'), 'utf8');
const users = JSON.parse(userData);

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts }));
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));
app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));



app.listen(port, () => {
  console.log(`Server is up and running on port :${port}`);
});

