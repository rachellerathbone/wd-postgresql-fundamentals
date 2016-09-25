'use strict';

const chai = require('chai');
const { assert } = chai;
const { suite, test } = require('mocha');

const env = 'part3';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const path = require('path');
const extractSQLSync = require('./extract_sql_sync');
const sql = extractSQLSync(path.join(__dirname, '..', 'lib', `${env}.sql`));

/* eslint-disable camelcase */
suite(env, () => {
  before((done) => {
    knex.migrate.latest()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  beforeEach((done) => {
    knex.seed.run()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get all reviews w/ customer name & restaurant name', (done) => {
    knex.raw(sql.getAllReviews)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        customer: 'Johnny Walker',
        venue: 'Hal\'s Hot Dawg Stand',
        rating: '2',
        review: 'The killer chili dawg was not kidding around. It killed my spirit and because of that I will not be returning to Hal\'s' // eslint-disable-line max-len
      }, {
        customer: 'Percy DoLittle',
        venue: 'Joe\'s Burritos',
        rating: '4',
        review: 'Joe\'s burrito is one of the best I\'ve had in town! I can\'t wait to tell all my friends about it!' // eslint-disable-line max-len
      }, {
        customer: 'Rainbow Huff\'n\'Puff',
        venue: 'McDouglas\'s Irish Fusion Cafe',
        rating: '1',
        review: 'Danny Boy\'s Pad Thai Pie was one of the most revolting things I\'ve ever had the displeasure of eating. I do not recommend.' // eslint-disable-line max-len
      }, {
        customer: 'Prince',
        venue: 'Joe\'s Burritos',
        rating: '5',
        review: 'The Mosquito Burrito was incredible! I can\'t wait to go back to Joe\'s again and try the rest of their menu!' // eslint-disable-line max-len
      }, {
        customer: 'Sue "McGonnigal" Samwortherton',
        venue: 'Hal\'s Hot Dawg Stand',
        rating: '2',
        review: 'Hal\'s is one of my least favorite places. The staff was rude and I definitely saw some ants! I do not recommmend.' // eslint-disable-line max-len
      }, {
        customer: 'Rainbow Huff\'n\'Puff',
        venue: 'Chan\'s China Palace',
        rating: '4',
        review: 'I had the Orange Chicken, and oh boy! It was great. I enjoyed every second of it!' // eslint-disable-line max-len
      }, {
        customer: 'Little baby Tomkins',
        venue: 'Benny\'s Meatballs',
        rating: '1',
        review: 'Benny really needs to stick to the meat. I had the vegetarian meatball sandwich and could hardly make it through. What was that stuff in the meatballs?' // eslint-disable-line max-len
      }, {
        customer: 'Rainbow Huff\'n\'Puff',
        venue: 'Benny\'s Meatballs',
        rating: '5',
        review: 'A friend of mine hated the vegetarian options so I went with the classic meatballs. They were incredible! I even snuck some home with me in a plastic bag.' // eslint-disable-line max-len
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get reservations w/ confirm, customer and restaurant name', (done) => {
    knex.raw(sql.getAllReservations)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        customer: 'Johnny Walker',
        venue: 'Hal\'s Hot Dawg Stand',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Percy DoLittle',
        venue: 'Joe\'s Burritos',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Rainbow Huff\'n\'Puff',
        venue: 'McDouglas\'s Irish Fusion Cafe',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Prince',
        venue: 'Benny\'s Meatballs',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Sue "McGonnigal" Samwortherton',
        venue: 'Benny\'s Meatballs',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Little baby Tomkins',
        venue: 'Chan\'s China Palace',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get vegetarian reservations w/ customer & restaurant names', (done) => {
    knex.raw(sql.getVegetarianReservations)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        customer: 'Rainbow Huff\'n\'Puff',
        venue: 'McDouglas\'s Irish Fusion Cafe',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }, {
        customer: 'Prince',
        venue: 'Benny\'s Meatballs',
        confirmed_at: new Date('2000-05-20 00:00:00 UTC')
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get reviews by customer 3 w/ customer & restaurant name', (done) => {
    knex.raw(sql.getReviewsByCustomer3)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        venue: 'McDouglas\'s Irish Fusion Cafe',
        review: 'Danny Boy\'s Pad Thai Pie was one of the most revolting things I\'ve ever had the displeasure of eating. I do not recommend.', // eslint-disable-line max-len
        rating: '1'
      }, {
        venue: 'Chan\'s China Palace',
        review: 'I had the Orange Chicken, and oh boy! It was great. I enjoyed every second of it!', // eslint-disable-line max-len
        rating: '4'
      }, {
        venue: 'Benny\'s Meatballs',
        review: 'A friend of mine hated the vegetarian options so I went with the classic meatballs. They were incredible! I even snuck some home with me in a plastic bag.', // eslint-disable-line max-len
        rating: '5'
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get bad reviews with customer & restaurant name', (done) => {
    knex.raw(sql.getBadReviews)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        customer: 'Johnny Walker',
        restaurant: 'Hal\'s Hot Dawg Stand',
        review: 'The killer chili dawg was not kidding around. It killed my spirit and because of that I will not be returning to Hal\'s', // eslint-disable-line max-len
        rating: '2'
      }, {
        customer: 'Rainbow Huff\'n\'Puff',
        restaurant: 'McDouglas\'s Irish Fusion Cafe',
        review: 'Danny Boy\'s Pad Thai Pie was one of the most revolting things I\'ve ever had the displeasure of eating. I do not recommend.', // eslint-disable-line max-len
        rating: '1'
      }, {
        customer: 'Sue "McGonnigal" Samwortherton',
        restaurant: 'Hal\'s Hot Dawg Stand',
        review: 'Hal\'s is one of my least favorite places. The staff was rude and I definitely saw some ants! I do not recommmend.', // eslint-disable-line max-len
        rating: '2'
      }, {
        customer: 'Little baby Tomkins',
        restaurant: 'Benny\'s Meatballs',
        review: 'Benny really needs to stick to the meat. I had the vegetarian meatball sandwich and could hardly make it through. What was that stuff in the meatballs?', // eslint-disable-line max-len
        rating: '1'
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get gluten free dishes at restaurants w/ 1 perfect rating', (done) => {
    knex.raw(sql.getGlutenFreeDishes)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        dish: 'Bumblebee Gluten Free Nachos',
        restaurant: 'Joe\'s Burritos',
        cost: '8.95',
        expense_level: 1
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('get gluten free and/or vegetarian dishes at restaurants w/ 1 perfect rating', (done) => { // eslint-disable-line max-len
    knex.raw(sql.getGlutenFreeOrVegetarianDishes)
    .then((result) => {
      const actual = result.rows;
      const expected = [{
        dish: 'Bumblebee Gluten Free Nachos',
        restaurant: 'Joe\'s Burritos',
        cost: '8.95',
        expense_level: 1
      }, {
        dish: 'Vegetarian Meatball Sammie',
        restaurant: 'Benny\'s Meatballs',
        cost: '12.00',
        expense_level: 3
      }];

      for (const row of expected) {
        assert.include(actual, row);
      }

      return assert.sameDeepMembers(actual, expected);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});
