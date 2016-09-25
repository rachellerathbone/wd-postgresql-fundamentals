'use strict';

/* eslint-disable camelcase */
module.exports.seed = function(knex) {
  return knex('reviews').del()
    .then(() => {
      return knex('reviews').insert({
        id: 1,
        customer_id: 1,
        restaurant_id: 1,
        rating: '2',
        comment: "The killer chili dawg was not kidding around. It killed my spirit and because of that I will not be returning to Hal's", // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 2,
        customer_id: 2,
        restaurant_id: 3,
        rating: '4',
        comment: "Joe's burrito is one of the best I've had in town! I can't wait to tell all my friends about it!", // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 3,
        customer_id: 3,
        restaurant_id: 2,
        rating: '1',
        comment: "Danny Boy's Pad Thai Pie was one of the most revolting things I've ever had the displeasure of eating. I do not recommend.", // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 4,
        customer_id: 4,
        restaurant_id: 3,
        rating: '5',
        comment: "The Mosquito Burrito was incredible! I can't wait to go back to Joe's again and try the rest of their menu!", // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 5,
        customer_id: 5,
        restaurant_id: 1,
        rating: '2',
        comment: "Hal's is one of my least favorite places. The staff was rude and I definitely saw some ants! I do not recommmend.", // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 6,
        customer_id: 3,
        restaurant_id: 4,
        rating: '4',
        comment: 'I had the Orange Chicken, and oh boy! It was great. I enjoyed every second of it!', // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 7,
        customer_id: 6,
        restaurant_id: 5,
        rating: '1',
        comment: 'Benny really needs to stick to the meat. I had the vegetarian meatball sandwich and could hardly make it through. What was that stuff in the meatballs?', // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    })
    .then(() => {
      return knex('reviews').insert({
        id: 8,
        customer_id: 3,
        restaurant_id: 5,
        rating: '5',
        comment: 'A friend of mine hated the vegetarian options so I went with the classic meatballs. They were incredible! I even snuck some home with me in a plastic bag.', // eslint-disable-line max-len
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      });
    });
};
