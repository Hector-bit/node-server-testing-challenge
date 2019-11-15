const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(trainer) {
  return db('trainers')
  .insert(trainer)
  .into('trainers')
}


async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('trainers')
  .del()
  .where({ id })
}

function find() {
  return db('trainers');
}

function findById(id) {
  return null;
}
