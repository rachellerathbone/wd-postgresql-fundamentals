/* Exercise selectAllRestaurants
Select all columns of all restaurants.
*/

SELECT * FROM restaurants;

/* Exercise selectAllRestaurantNames
Select the names of all the restaurants.
*/

SELECT name FROM restaurants;

/* Exercise selectAllCustomerNames
Select the names of all the customers.
*/

SELECT name FROM customers;

/* Exercise selectCustomerById
Select all columns of a single customer with an id of 1.
*/

SELECT * FROM customers WHERE id = 1;

/* Exercise selectLocationById
Select all columns of a single location with an id of 3.
*/

SELECT * FROM locations WHERE id = 3;

/* Exercise selectCountOfAllLocationsByCity
Select the count of all the locations by city.
*/

SELECT COUNT(city) FROM locations;

/* Exercise selectDistinctCountOfAllLocationsByCity
Select the count of all the unique cities with locations.
*/

SELECT COUNT(DISTINCT city) FROM locations;

/* Exercise selectCheapestDish
Select all columns the cheapest dish
*/

SELECT * FROM dishes WHERE cost = (SELECT MIN(cost) FROM dishes);

/* Exercise insertRestaurant
Insert the following row into the restaurants table:
name       | Sheesh Kebap
kind       | Iranian
bio        | Be amazed, our chef bobs like no other!
dollars    | 4
opened_at  | 1977-03-01 00:00:00 UTC
created_at | 2000-04-22 00:00:00 UTC
updated_at | 2000-04-22 00:00:00 UTC
*/

INSERT INTO restaurants (name, kind, bio, dollars, opened_at, created_at, updated_at)
VALUES ('Sheesh Kebap', 'Iranian', 'Be amazed, our chef bobs like no other!','4', '1977-03-01 00:00:00 UTC', '2000-04-22 00:00:00 UTC', '2000-04-22 00:00:00 UTC');


/* Exercise insertCustomer
Insert the following row into the customers table
name       | the connoisseur
email      | loveIt@bomb.com
created_at | 2000-04-22 00:00:00 UTC
updated_at | 2000-04-22 00:00:00 UTC
*/

INSERT INTO customers (name, email, created_at, updated_at)
VALUES ('the connoisseur', 'loveIt@bomb.com', '2000-04-22 00:00:00 UTC', '2000-04-22 00:00:00 UTC');


/* Exercise insertDish
Insert the following row into the dishes table
restaurant_id  | 1
name           | The Bog Dog
description    | This dawg hails from the depths of the bog! Made with real alligator.
cost           | 9.65
vegetarian_at  | null
gluten_free_at | null
created_at     | 2000-04-22 00:00:00 UTC
updated_at     | 2000-04-22 00:00:00 UTC
*/

INSERT INTO dishes (restaurant_id, name, description, cost, vegetarian_at, gluten_free_at, created_at, updated_at)
VALUES ('1', 'The Bog Dog', 'This dawg hails from the depths of the bog! Made with real alligator.', '9.65', null, null, '2000-04-22 00:00:00 UTC', '2000-04-22 00:00:00 UTC');


/* Exercise insertReservation
Insert the following row into the reservations table
customer_id       | 4
restaurant_id     | 3
wants_vegetarian  | true
wants_gluten_free | false
confirmed_at      | 2000-04-22 00:00:00 UTC
created_at        | 2000-04-22 00:00:00 UTC
updated_at        | 2000-04-22 00:00:00 UTC
*/

INSERT INTO reservations (customer_id, restaurant_id, wants_vegetarian, wants_gluten_free, confirmed_at, created_at, updated_at)
VALUES ('4', '3', 'true', 'false', '2000-04-22 00:00:00 UTC', '2000-04-22 00:00:00 UTC', '2000-04-22 00:00:00 UTC');

/* Exercise updateCustomerName
Update the 'Little baby Tomkins' customer's name to 'Big Tom Tomkins'
*/

UPDATE customers SET name = 'Big Tom Tomkins' WHERE name = 'Little baby Tomkins';


/* Exercise updateLocationById
Update the id = 3 location's street to '555 No Way' and city to 'Olympia'
*/

UPDATE locations SET street = '555 No Way', city = 'Olympia' WHERE id = 3;

/* Exercise updateDishWithChicken
Update "Melinda's salad blend" to not be a vegetarian
*/

UPDATE dishes SET vegetarian_at = NULL WHERE name = 'Melinda''s salad blend';


/* Exercise deleteCustomer
Delete customers whose name is "Prince"
*/

DELETE FROM customers WHERE name = 'Prince';

/* Exercise deleteRestaurantsByDollar
Delete restaurants with more than 2 dollar signs.
*/

DELETE FROM restaurants WHERE dollars > 2;

/* Exercise deleteAllVegetarianDishes
Delete all vegetarian dishes
*/

DELETE FROM dishes WHERE vegetarian_at is not null;
