'use strict';
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  try {
    response.status(200).send('Dev Practice Server');
  } catch(e) {
    console.log(e);
  }
});

app.get('/add/:num1/:num2', (request, response) => {
  const sum = Number.parseInt(request.params.num1) + Number.parseInt(request.params.num2);
  try {
    response.status(200).send({sum: sum});
  } catch(e) {
    console.log(e);
  }
});

app.get('/hello', (request, response) => {
  try{
    response.status(200).send({greeting: `Hello ${request.query.name}`});
  } catch(e) {
    console.log(e);
  }
});

app.get('*', (request, response) => {
  try {
    response.status(404).send('No route');
  } catch(e) {
    console.log(e);
  }
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

module.exports = app;
