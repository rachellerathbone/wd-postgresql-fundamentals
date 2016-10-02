'use strict';

/* eslint-disable camelcase */
// Define a function named selectAllRestaurants that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the restaurants as an array
// of objects
//
// Example:
//    [
//      {
//        id: 1,
//        name: "Hal's Hot Dawg Stand",
//        kind: 'American',
//        bio: "Hal's is the place for all your burgers and dawg needs.",
//        dollars: 1,
//        opened_at: new Date('1977-03-01 00:00:00 UTC),
//        created_at: new Date('2000-05-20 00:00:00 UTC'),
//        updated_at: new Date('2000-05-20 00:00:00 UTC')
//      },
//      ...
//    ]
module.exports.selectAllRestaurants = function(knex) {
  return knex('restaurants');
};

// Define a function named selectAllRestaurantNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the restaurant names as an
// array of objects
//
// Example:
//    [
//      { name: "Hal's Hot Dawg Stand" },
//      { name: "McDouglas's Irish Fusion Cafe" },
//      ...
//    ]
module.exports.selectAllRestaurantNames = function(knex) {
  return knex('restaurants')
    .select('name');
};

// Define a function named selectAllCustomenrNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the customer names as an
// array of objects
//
// Example:
//    [
//      { name: 'Johnny Walker' },
//      { name: 'Percy DoLittle' },
//      ...
//    ]
module.exports.selectAllCustomerNames = function(knex) {
  return knex('customers')
  .select('name');
};

// Define a function named selectCustomerById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns customer information as a
// single object in an array
//
// Example:
//    [
//      {
//        id: 1,
//        name: 'Johnny Walker',
//        email: 'drinks@home.com',
//        ...
//      }
//    ]
module.exports.selectCustomerById = function(knex) {
  return knex('customers')
    .limit(1);
};

// Define a function named selectLocationById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns location information as a
// single object in an array
//
// Example:
//    [
//      {
//        id: 3,
//        restaurant_id: 2,
//        street: '1289 Dublin Way',
//        ...
//      }
//    ]
module.exports.selectLocationById = function(knex) {
  return knex('locations')
    .where('id', '3');
};

// Define a function named selectCountOfLocationCities that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the total number of locations
// as the only object in an array
//
// Example:
//    [{ count: '7' }]
module.exports.selectCountOfLocationCities = function(knex) {
  return knex('locations')
    .count('city');
};

// Define a function named selectDistinctCountOfLocationCities that takes one
// argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the total number of distinct
// cities as the only object in an array
//
// Example:
//    [{ count: '3' }]
module.exports.selectDistinctCountOfLocationCities = function(knex) {
  return knex('locations')
    .countDistinct('city');
};

// Define a function named selectCheapestDish that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns information about the dish with
// the cheapest cost
//
// Example:
//    [
//      {
//        id: 1,
//        restaurant_id: 1,
//        name: 'the killer chili dawg',
//        description: 'The ULTIMATE test.',
//        cost: '7.65',
//        ...
//      }
//    ]
module.exports.selectCheapestDish = function(knex) {
  return knex('dishes')
    .orderBy('cost', 'ASC')
    .limit(1);

      // .where('cost', knex('dishes').min('cost'))

      // const subquery = knex('dishes').min('cost')
      //   return knex('dishes')
      //   .where('cost', 'in', subquery);
};

// Basic Insert Queries:

// Define a function named addRestaurant that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually will insert the following restaurant:
// name       | Sheesh Kebap
// kind       | Iranian
// bio        | Be amazed, our chef bobs like no other!
// dollars    | 4
// opened_at  | 1977-03-01 00:00:00 UTC
// created_at | 2000-04-22 00:00:00 UTC
// updated_at | 2000-04-22 00:00:00 UTC
//
module.exports.addRestaurant = function(knex) {
  return knex('restaurants')
    .insert({
      name: 'Sheesh Kebap',
      kind: 'Iranian',
      bio: 'Be amazed, our chef bobs like no other!',
      dollars: 4,
      opened_at: new Date('1977-03-01 00:00:00 UTC'),
      created_at: new Date('2000-04-22 00:00:00 UTC'),
      updated_at: new Date('2000-04-22 00:00:00 UTC')
    });
};

// Define a function named addCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually will insert the following customer:
// name       | the connoisseur
// email      | loveIt@bomb.com
// created_at | 2000-04-22 00:00:00 UTC
// updated_at | 2000-04-22 00:00:00 UTC
//
module.exports.addCustomer = function(knex) {
  return knex('customers')
    .insert({
      name: 'the connoisseur',
      email: 'loveIt@bomb.com',
      created_at: new Date('2000-04-22 00:00:00 UTC'),
      updated_at: new Date('2000-04-22 00:00:00 UTC')
    });
};

// Define a function named addNewDishToHals that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually inserts the following dish
// restaurant_id  | 1
// name           | The Bog Dog
// description    | This dawg hails from the depths of the bog! Made with real
//                | alligator.
// cost           | 9.65
// vegetarian_at  | null
// gluten_free_at | null
// created_at     | 2000-04-22 00:00:00 UTC
// updated_at     | 2000-04-22 00:00:00 UTC
//
module.exports.addNewDishToHals = function(knex) {
  return knex('dishes')
    .insert({
      restaurant_id: 1,
      name: 'The Bog Dog',
      description: 'This dawg hails from the depths of the bog! Made with real alligator.', // eslint-disable-line max-len
      cost: '9.65',
      vegetarian_at: null,
      gluten_free_at: null,
      created_at: new Date('2000-04-22 00:00:00 UTC'),
      updated_at: new Date('2000-04-22 00:00:00 UTC')
    });
};

// Define a function named addReservation that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually inserts the following reservation
// customer_id       | 4
// restaurant_id     | 3
// wants_vegetarian  | true
// wants_gluten_free | false
// confirmed_at      | 2000-04-22 00:00:00 UTC
// created_at        | 2000-04-22 00:00:00 UTC
// updated_at        | 2000-04-22 00:00:00 UTC
//
module.exports.addReservation = function(knex) {
  return knex('reservations')
    .insert({
      customer_id: 4,
      restaurant_id: 3,
      wants_vegetarian: true,
      wants_gluten_free: false,
      confirmed_at: new Date('2000-04-22 00:00:00 UTC'),
      created_at: new Date('2000-04-22 00:00:00 UTC'),
      updated_at: new Date('2000-04-22 00:00:00 UTC')
    });
};

// Define a function named updateCustomerName that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually updates all customers named
// 'Little baby Tomkins' to 'Big Tom Tomkins'
//
module.exports.updateCustomerName = function(knex) {
  return knex('customers')
    .where('name', 'Little baby Tomkins')
    .update({
      name: 'Big Tom Tomkins'
    });
};

// Define a function named updateLocationById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually updates the location's street to
// '555 No Way' and city to 'Olympia' for a location with id = 3
//
module.exports.updateLocationById = function(knex) {
  return knex('locations')
    .where('id', '3')
    .update({
      street: '555 No Way',
      city: 'Olympia'
    });
};

// Define a function named updateDishWithChx that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually updates dishes named "Melinda's
// salad blend" to not be vegetarian
//
module.exports.updateDishWithChx = function(knex) {
  return knex('dishes')
    .where('name', 'Melinda\'s salad blend')
    .update({
      vegetarian_at: null
    });
};

// Define a function named deleteCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually deletes all customers named "Prince"
//
module.exports.deleteCustomer = function(knex) {
  return knex('customers')
    .where('name', 'Prince')
    .del();
};

// Define a function named deleteRestaurantsByDollar that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually deletes all restaurants whose number
// of dollar signs is greater than 2.
//
module.exports.deleteRestaurantsByDollar = function(knex) {
  return knex('restaurants')
    .where('dollars', '>', 2)
    .del();
};

// Define a function named deleteAllVegetarianDishes that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually deletes all vegetarian dishes.
//
module.exports.deleteAllVegetarianDishes = function(knex) {
  return knex('dishes')
    .whereNotNull('vegetarian_at')
    .del();
};
