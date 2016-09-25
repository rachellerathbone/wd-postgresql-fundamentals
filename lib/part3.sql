/* Exercise getAllReviews
Get all reviews w/ customer name & restaurant name

It would have the following columns:
customer      | the name of the customer
venue         | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review
*/


/* Exercise getAllReservations
Get all reservations w/ confirm time, customer name, restaurant name

It would have the following columns:
customer      | the name of the customer
venue         | the name of the restaurant
confirmed_at  | the confirmation time
*/


/* Exercise getVegetarianReservations
Get vegetarian reservations w/ customer & restaurant names

It would have the following rows:
customer      | the name of the customer
venue         | the name of the restaurant
confirmed_at  | the confirmation time
*/


/* Exercise getReviewsByCustomer3
Get reviews by the customer with id #3

It would have the following rows:
venue         | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review
*/


/* Exercise getBadReviews
Get bad reviews (rating below 4) with customer name & restaurant name.
NOTE: Remember, rating column is a string from an enum.

It would have the following rows:
customer      | the name of the customer
restaurant    | the name of the restaurant
rating        | the rating in the customer review
review        | the comment from the customer review
*/


/* Exercise getGlutenFreeDishes
Get gluten free dishes at restaurants that have min 1 perfect rating

It would have the following rows:
dish          | the name of the dish
restaurant    | the name of the restaurant
cost          | how much the dish costs
expense_level | the dollar rating of the restaurant
*/


/* Exercise getGlutenFreeOrVegetarianDishes
Get dishes that are gluten free and/or vegetarian at restaurants that have min 1 perfect rating

It would have the following rows:
dish          | the name of the dish
restaurant    | the name of the restaurant
cost          | how much the dish costs
expense_level | the dollar rating of the restaurant
*/
