
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainers').insert([
        { name: 'Red', badges: 2},
        { name: 'Blue', badges: 3},
        { name: 'Green', badges: 5}
      ]);
    });
};
