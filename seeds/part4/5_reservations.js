'use strict';

/* eslint-disable camelcase */
module.exports.seed = function(knex) {
  return knex('reservations').del()
    .then(() => {
      return knex('reservations').insert({
        id: 1,
        customer_id: 1,
        restaurant_id: 1,
        wants_vegetarian: false,
        wants_gluten_free: true,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reservations').insert({
        id: 2,
        customer_id: 3,
        restaurant_id: 2,
        wants_vegetarian: true,
        wants_gluten_free: false,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reservations').insert({
        id: 3,
        customer_id: 2,
        restaurant_id: 3,
        wants_vegetarian: false,
        wants_gluten_free: false,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reservations').insert({
        id: 4,
        customer_id: 4,
        restaurant_id: 5,
        wants_vegetarian: true,
        wants_gluten_free: false,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reservations').insert({
        id: 5,
        customer_id: 6,
        restaurant_id: 4,
        wants_vegetarian: false,
        wants_gluten_free: true,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reservations').insert({
        id: 6,
        customer_id: 5,
        restaurant_id: 5,
        wants_vegetarian: false,
        wants_gluten_free: false,
        confirmed_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    });
};
