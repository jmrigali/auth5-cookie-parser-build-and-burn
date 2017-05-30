const express = require('express');
const app = express();
const cookieP= require('cookie-parser');

app.use(cookieP());

app.get('/set', (req,res,next) => {
  res.cookie("foo","bar").send();
});

app.get('/read', (req,res,next) => {
  res.send(req.cookies);

});

app.get('/clear', (req,res,next) => {
  res.clearCookie('deleteMe').send();
});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
