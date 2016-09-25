'use strict';

module.exports = {
  part1: {
    client: 'pg',
    connection: 'postgres://localhost/pg_fun_part1'
  },

  part2: {
    client: 'pg',
    connection: 'postgres://localhost/pg_fun_part2',
    migrations: {
      directory: './migrations/part2'
    },
    seeds: {
      directory: './seeds/part2'
    }
  },

  part3: {
    client: 'pg',
    connection: 'postgres://localhost/pg_fun_part3',
    migrations: {
      directory: './migrations/part3'
    },
    seeds: {
      directory: './seeds/part3'
    }
  },

  part4: {
    client: 'pg',
    connection: 'postgres://localhost/pg_fun_part4',
    migrations: {
      directory: './migrations/part4'
    },
    seeds: {
      directory: './seeds/part4'
    }
  }
};
