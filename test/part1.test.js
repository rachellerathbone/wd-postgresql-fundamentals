/* eslint-disable camelcase, max-lines */
'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const env = 'part1';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const path = require('path');
const extractSQLSync = require('./extract_sql_sync');
const sql = extractSQLSync(path.join(__dirname, '..', 'lib', `${env}.sql`));

suite(env, () => {
  beforeEach((done) => {
    knex.schema
      .dropTableIfExists('customers')
      .dropTableIfExists('restaurants')
      .dropTableIfExists('locations')
      .dropTableIfExists('dishes')
      .dropTableIfExists('reservations')
      .dropTableIfExists('reviews')
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create customers table', (done) => {
    knex.raw(sql.createTableCustomers)
      .then(() => {
        return knex('customers').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'customers_id_seq\'::regclass)'
          },

          name: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          email: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create restaurants table', (done) => {
    knex.raw(sql.createTableRestaurants)
      .then(() => {
        return knex('restaurants').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'restaurants_id_seq\'::regclass)'
          },

          name: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          kind: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          bio: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          dollars: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          opened_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create locations table', (done) => {
    knex.raw(sql.createTableLocations)
      .then(() => {
        return knex('locations').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'locations_id_seq\'::regclass)'
          },

          name: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          street: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          city: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          state: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          zip: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          phone: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create dishes table', (done) => {
    knex.raw(sql.createTableDishes)
      .then(() => {
        return knex('dishes').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'dishes_id_seq\'::regclass)'
          },

          restaurant_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          name: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          description: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          cost: {
            type: 'numeric',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          vegetarian_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          gluten_free_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create reservations table', (done) => {
    knex.raw(sql.createTableReservations)
      .then(() => {
        return knex('reservations').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'reservations_id_seq\'::regclass)'
          },

          customer_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          restaurant_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          wants_vegetarian: {
            type: 'boolean',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          wants_gluten_free: {
            type: 'boolean',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          confirmed_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('create reviews table', (done) => {
    knex.raw(sql.createTableReviews)
      .then(() => {
        return knex('reviews').columnInfo();
      })
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'reviews_id_seq\'::regclass)'
          },

          customer_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          restaurant_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          rating: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          comment: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
