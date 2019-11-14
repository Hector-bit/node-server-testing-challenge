const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(hobbit) {
  return (
    db("pokemon")
      .insert(hobbit, "id")
      // .then(([id]) => {
      .then(ids => {
        const id = ids[0];
        // const [id] = ids;
        return db("hobbits")
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
  return db('pokemon');
}

function findById(id) {
  return null;
}
