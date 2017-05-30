const express = require('express');
const app = express();

app.get('/set', (req,res,next) => {
  
});

app.get('/read', (req,res,next) => {

});

app.get('/clear', (req,res,next) => {

});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
