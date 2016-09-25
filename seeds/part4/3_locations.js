'use strict';

/* eslint-disable camelcase */
module.exports.seed = function(knex) {
  return knex('locations').del()
    .then(() => {
      return knex('locations').insert({
        id: 1,
        restaurant_id: 1,
        street: '123 Somewhere Street',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98109',
        phone: '206-555-1234',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 2,
        restaurant_id: 1,
        street: '456 Central Avenue',
        city: 'Tacoma',
        state: 'WA',
        zipcode: '98401',
        phone: '206-555-5678',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 3,
        restaurant_id: 2,
        street: '1289 Dublin Way',
        city: 'Olympia',
        state: 'WA',
        zipcode: '98501',
        phone: '206-555-8329',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 4,
        restaurant_id: 3,
        street: '1111 Taco Street',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98107',
        phone: '206-555-0990',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 5,
        restaurant_id: 4,
        street: '5280 Mile High Drive',
        city: 'Olympia',
        state: 'WA',
        zipcode: '98504',
        phone: '206-555-8787',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 6,
        restaurant_id: 5,
        street: '789 Square Circle',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98108',
        phone: '206-555-9999',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('locations').insert({
        id: 7,
        restaurant_id: 4,
        street: '2001 Space Boulevard',
        city: 'Tacoma',
        state: 'WA',
        zipcode: '98401',
        phone: '206-555-1212',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    });
};
