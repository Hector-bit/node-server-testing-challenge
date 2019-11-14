const express = require('express');

const pokemonRoute = require('../Pokemon/pokemon-route');
const trainerRoute = require('../Trainers/trainers-route');

const server = express();

server.use(express.json());

server.use('/api', pokemonRoute);
server.use('/api', trainerRoute);

module.exports = server;
