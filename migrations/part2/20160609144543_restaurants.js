'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('restaurants', (table) => {
    table.increments('id');
    table.string('name');
    table.string('kind');
    table.text('bio');
    table.integer('dollars');
    table.timestamp('opened_at');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('restaurants');
};
