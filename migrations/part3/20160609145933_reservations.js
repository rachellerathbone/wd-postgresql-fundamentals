'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('id');
    table.integer('customer_id')
      .references('id')
      .inTable('customers')
      .onDelete('CASCADE')
      .index();
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.boolean('wants_vegetarian');
    table.boolean('wants_gluten_free');
    table.timestamp('confirmed_at');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('reservations');
};
