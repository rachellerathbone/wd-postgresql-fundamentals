'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id');
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.string('street');
    table.string('city');
    table.string('state');
    table.string('zipcode');
    table.string('phone');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('locations');
};
