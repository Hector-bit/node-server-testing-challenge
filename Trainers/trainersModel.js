const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(pokemon) {
  return (
    db("trainers")
      .insert(pokemon, "id")
      // .then(([id]) => {
      .then(ids => {
        const id = ids[0];
        // const [id] = ids;
        return db("trainers")
          .where({ id })
          .first();
      })
  );
}


async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function find() {
  return db('trainers');
}

function findById(id) {
  return null;
}
