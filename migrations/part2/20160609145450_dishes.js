'use strict';

module.exports.up = function(knex) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments('id');
    table.integer('restaurant_id')
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.string('name');
    table.text('description');
    table.decimal('cost');
    table.timestamp('vegetarian_at');
    table.timestamp('gluten_free_at');
    table.timestamps(true, true);
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('dishes');
};
