'use strict';

/* eslint-disable camelcase */
module.exports.seed = function(knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert({
        id: 1,
        name: "Hal's Hot Dawg Stand",
        kind: 'American',
        bio: "Hal's is the place for all your burgers and dawg needs.",
        dollars: 1,
        opened_at: new Date('1977-03-01 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('restaurants').insert({
        id: 2,
        name: "McDouglas's Irish Fusion Cafe",
        kind: 'Irish/Thai',
        bio: "You can't believe what this amazing Thai Irish pub fusion creates. Trust us, you'll love it.", // eslint-disable-line max-len
        dollars: 2,
        opened_at: new Date('2015-11-31 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('restaurants').insert({
        id: 3,
        name: "Joe's Burritos",
        kind: 'Mexican',
        bio: "Not the best burrito in town, if you want better, try Jose's.",
        dollars: 1,
        opened_at: new Date('1997-07-22 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('restaurants').insert({
        id: 4,
        name: "Chan's China Palace",
        kind: 'Chinese',
        bio: 'A hidden gem in the Pacific Northwest. Upscale dining with an incredible menu and great wait staff.', // eslint-disable-line max-len
        dollars: 4,
        opened_at: new Date('1991-03-08 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('restaurants').insert({
        id: 5,
        name: "Benny's Meatballs",
        kind: 'Italian',
        bio: 'The best meatballs in town! Affordable and tasty, these meatballs will have you coming back for more.', // eslint-disable-line max-len
        dollars: 3,
        opened_at: new Date('2004-10-17 00:00:00 UTC'),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    });
};
