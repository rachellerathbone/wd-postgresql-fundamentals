/* Exercise selectAllRestaurants
Select all columns of all restaurants.
*/

SELECT * FROM restaurants;

/* Exercise selectAllRestaurantNames
Select the names of all the restaurants.
*/


/* Exercise selectAllCustomerNames
Select the names of all the customers.
*/


/* Exercise selectCustomerById
Select all columns of a single customer with an id of 1.
*/


/* Exercise selectLocationById
Select all columns of a single location with an id of 3.
*/


/* Exercise selectCountOfAllLocationsByCity
Select the count of all the locations by city.
*/


/* Exercise selectDistinctCountOfAllLocationsByCity
Select the count of all the unique cities with locations.
*/


/* Exercise selectCheapestDish
Select all columns the cheapest dish
*/


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


/* Exercise insertCustomer
Insert the following row into the customers table
name       | the connoisseur
email      | loveIt@bomb.com
created_at | 2000-04-22 00:00:00 UTC
updated_at | 2000-04-22 00:00:00 UTC
*/


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


/* Exercise updateCustomerName
Update the 'Little baby Tomkins' customer's name to 'Big Tom Tomkins'
*/


/* Exercise updateLocationById
Update the id = 3 location's street to '555 No Way' and city to 'Olympia'
*/


/* Exercise updateDishWithChicken
Update "Melinda's salad blend" to not be a vegetarian
*/


/* Exercise deleteCustomer
Delete customers whose name is "Prince"
*/


/* Exercise deleteRestaurantsByDollar
Delete restaurants with more than 2 dollar signs.
*/


/* Exercise deleteAllVegetarianDishes
Delete all vegetarian dishes
*/
