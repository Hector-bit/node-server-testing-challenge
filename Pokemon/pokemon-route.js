const express = require('express');

const Pokemon = require('../Pokemon/pokemonModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/pokemon', (req, res) => {
    Pokemon.find()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/pokemon', (req, res) => {
    Pokemon.insert(req.body)
    .then(pokemon => {
        res.status(200).json(pokemon);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.delete('/pokemon/:id', (req, res) => {
    Pokemon.remove(req.params.id)
    .then(pokemon => {
        res.status(200).json(pokemon)
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = server;
