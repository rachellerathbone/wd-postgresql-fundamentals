'use strict';

/* eslint-disable camelcase */
module.exports.seed = function(knex) {
  return knex('dishes').del()
    .then(() => {
      return knex('dishes').insert({
        id: 1,
        restaurant_id: 1,
        name: 'the killer chili dawg',
        description: 'The ULTIMATE test.',
        cost: 7.65,
        vegetarian_at: null,
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 2,
        restaurant_id: 1,
        name: "Melinda's salad blend",
        description: 'This salad is good for the non-carne among you.',
        cost: 8.43,
        vegetarian_at: new Date('1977-03-01 00:00:00 UTC'),
        gluten_free_at: new Date('1977-03-01 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 3,
        restaurant_id: 2,
        name: "Danny Boy's Pad Thai Pie",
        description: 'Quite a unique dish, this is a fusion of classic pad Thai inside of a pot pie. Yummy and gluten-free! (Somehow)', // eslint-disable-line max-len
        cost: 7.75,
        vegetarian_at: null,
        gluten_free_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 4,
        restaurant_id: 3,
        name: 'The Mosquito Burrito',
        description: 'A delectable mixture of rice, beans, guac, and cheese. It will definitely get you buzzing!', // eslint-disable-line max-len
        cost: 9.99,
        vegetarian_at: null,
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 5,
        restaurant_id: 3,
        name: 'Bumblebee Gluten Free Nachos',
        description: 'A whole heap of gluten-free nachos covered in gluten-free nacho cheese, jalapenos, and beans.', // eslint-disable-line max-len
        cost: 8.95,
        vegetarian_at: null,
        gluten_free_at: new Date('2000-05-20 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 6,
        restaurant_id: 4,
        name: 'Orange Chicken Crossroads',
        description: 'Delicious citrus flavors served across an avenue of broccoli and carrots.', // eslint-disable-line max-len
        cost: 11.25,
        vegetarian_at: null,
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 7,
        restaurant_id: 5,
        name: 'Meatspheres a la Benny',
        description: "Traditional Italian meatballs with a special secret ingredient you'll never be able to guess! Just kidding, it's meat.", // eslint-disable-line max-len
        cost: 9.50,
        vegetarian_at: null,
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('dishes').insert({
        id: 8,
        restaurant_id: 5,
        name: 'Vegetarian Meatball Sammie',
        description: 'Delicious Italian bread loaded up with a twist on our classic meatspheres, we use Tofurkey instead!', // eslint-disable-line max-len
        cost: 12.00,
        vegetarian_at: new Date('2000-05-20 00:00:00 UTC'),
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('dishes_id_seq', (SELECT MAX(id) FROM dishes));"
      );
    });
};
