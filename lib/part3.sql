/* Exercise getAllReviews
Get all reviews w/ customer name & restaurant name

It would have the following columns:
customer      | the name of the customer
venue         | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review

*/

SELECT customers.name AS customer, restaurants.name AS venue, rating, comment AS review
FROM reviews
INNER JOIN restaurants ON restaurants.id = reviews.restaurant_id
INNER JOIN customers ON customers.id = reviews.customer_id;

/* Exercise getAllReservations
Get all reservations w/ confirm time, customer name, restaurant name
It would have the following columns:
customer      | the name of the customer
venue         | the name of the restaurant
confirmed_at  | the confirmation time
*/
SELECT customers.name AS customer, restaurants.name AS venue, confirmed_at
FROM reservations
INNER JOIN restaurants ON restaurants.id = reservations.restaurant_id
INNER JOIN customers ON customers.id = reservations.customer_id;

/* Exercise getVegetarianReservations
Get vegetarian reservations w/ customer & restaurant names

It would have the following rows:
customer      | the name of the customer
venue         | the name of the restaurant
confirmed_at  | the confirmation time
*/
SELECT customers.name AS customer, restaurants.name AS venue, confirmed_at
FROM reservations
INNER JOIN restaurants ON restaurants.id = reservations.restaurant_id
INNER JOIN customers ON customers.id = reservations.customer_id
WHERE wants_vegetarian = true;

/* Exercise getReviewsByCustomer3
Get reviews by the customer with id #3

It would have the following rows:
venue         | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review
*/
SELECT restaurants.name AS venue, rating, comment AS review
FROM reviews
INNER JOIN restaurants ON restaurants.id = reviews.restaurant_id
WHERE customer_id = 3;

/* Exercise getBadReviews
Get bad reviews (rating below 4) with customer name & restaurant name.
NOTE: Remember, rating column is a string from an enum.

It would have the following rows:
customer      | the name of the customer
restaurant    | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review
*/
SELECT customers.name AS customer, restaurants.name AS restaurant, rating, comment AS review
FROM reviews
INNER JOIN restaurants ON restaurants.id = reviews.restaurant_id
INNER JOIN customers ON customers.id = reviews.customer_id
WHERE rating < '4';
-- ALTER TABLE reviews ALTER COLUMN rating TYPE integer;

/* Exercise getGlutenFreeDishes
Get gluten free dishes at restaurants that have min 1 perfect rating

It would have the following rows:
dish          | the name of the dish
restaurant    | the name of the restaurant
cost          | how much the dish costs
expense_level | the dollar rating of the restaurant
*/
SELECT dishes.name AS dish, restaurants.name AS restaurant, cost, restaurants.dollars AS expense_level
FROM dishes
INNER JOIN restaurants ON restaurants.id = dishes.restaurant_id
INNER JOIN reviews ON restaurants.id = reviews.restaurant_id
WHERE rating = '5' AND gluten_free_at IS NOT NULL;

/* Exercise getGlutenFreeOrVegetarianDishes
Get dishes that are gluten free and/or vegetarian at restaurants that have min 1 perfect rating

It would have the following rows:
dish          | the name of the dish
restaurant    | the name of the restaurant
cost          | how much the dish costs
expense_level | the dollar rating of the restaurant
*/
SELECT dishes.name AS dish, restaurants.name AS restaurant, cost, restaurants.dollars AS expense_level
FROM dishes
INNER JOIN restaurants ON restaurants.id = dishes.restaurant_id
INNER JOIN reviews ON restaurants.id = reviews.restaurant_id
WHERE rating = '5' AND (gluten_free_at IS NOT NULL OR vegetarian_at IS NOT NULL);
