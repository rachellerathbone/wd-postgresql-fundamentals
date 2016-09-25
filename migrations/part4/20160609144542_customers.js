'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
