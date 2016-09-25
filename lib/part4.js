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
  return knex('restaurants').select();
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

};

// Define a function named selectAllCustomerNames that takes one argument
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

};

// Basic Insert Queries:

// Define a function named addRestaurant that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addRestaurant = function(knex) {

};

// Define a function named addCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addCustomer = function(knex) {

};

// Define a function named addNewDishToHals that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addNewDishToHals = function(knex) {

};

// Define a function named addReservation that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addReservation = function(knex) {

};

// Define a function named updateCustomerName that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateCustomerName = function(knex) {

};

// Define a function named updateLocationById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateLocationById = function(knex) {

};

// Define a function named updateDishWithChx that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateDishWithChx = function(knex) {

};

// Define a function named deleteCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteCustomer = function(knex) {

};

// Define a function named deleteRestaurantsByDollar that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteRestaurantsByDollar = function(knex) {

};

// Define a function named deleteAllVegetarianDishes that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteAllVegetarianDishes = function(knex) {

};
