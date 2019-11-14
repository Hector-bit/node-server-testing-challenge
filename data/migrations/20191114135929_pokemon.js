exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('pokemon', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('type', 255).notNullable();
    })
    .createTable('trainers', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.integer('badges').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema
    .dropTableIfExists('pokemon')
    .dropTableIfExists('trainers');
  };
  