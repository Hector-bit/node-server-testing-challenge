
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {name: 'Tepig', type: 'Fire'},
        {name: 'Oshawatt', type: 'Water'},
        {name: 'Snivy', type: 'Grass'}
      ]);
    });
};
