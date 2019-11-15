const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(pokemon) {
  return db('pokemon')
  .insert(pokemon)
  .into('pokemon')
}


async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function find() {
  return db('pokemon');
}

function findById(id) {
  return null;
}
