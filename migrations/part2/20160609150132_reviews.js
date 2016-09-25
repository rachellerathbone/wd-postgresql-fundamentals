'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id');
    table.integer('customer_id')
      .notNullable()
      .references('id')
      .inTable('customers')
      .onDelete('CASCADE')
      .index();
    table.integer('restaurant_id')
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.integer('rating');
    table.text('comment');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
