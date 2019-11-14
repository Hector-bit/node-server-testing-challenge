const express = require('express');

const Trainers = require('../Trainers/trainersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/trainers', (req, res) => {
    Trainers.find()
    .then(trainer => {
      res.status(200).json(trainer);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
