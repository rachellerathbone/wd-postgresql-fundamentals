/* Exercise createTableCustomers
Create a customers table with the following columns.

id         | an auto-incrementing integer
name       | a string of varying length up to 255 characters
email      | a string of varying length up to 255 characters
created_at | a timestamp that includes a time zone
updated_at | a timestamp that includes a time zone
*/

CREATE TABLE customers (
  id serial,
  name varchar(255),
  email varchar(255),
  created_at timestamp with time zone,
  updated_at timestamp with time zone
);

/* Exercise createTableRestaurants
Create a restaurants table with the following columns.

id         | an auto-incrementing integer
name       | a string of varying length up to 255 characters
kind       | a string of varying length up to 255 characters
bio        | a string of unlimited length
opened_at  | a timestamp that includes a time zone
created_at | a timestamp that includes a time zone
updated_at | a timestamp that includes a time zone
*/


/* Exercise createTableLocations
Create a locations table with the following columns.

id         | an auto-incrementing integer
name       | a string of varying length up to 255 characters
street     | a string of varying length up to 255 characters
city       | a string of varying length up to 255 characters
state      | a string of varying length up to 255 characters
zip        | a string of varying length up to 255 characters
phone      | a string of varying length up to 255 characters
created_at | a timestamp that includes a time zone
updated_at | a timestamp that includes a time zone
*/


/* Exercise createTableDishes
Create a dishes table with the following columns.

id             | an auto-incrementing integer
restaurant_id  | an integer that cannot be null
name           | a string of varying length up to 255 characters
description    | a string of unlimited length
cost           | a number with a precision of 8 and a scale of 2
vegetarian_at  | a timestamp that includes a time zone
gluten_free_at | a timestamp that includes a time zone
created_at     | a timestamp that includes a time zone
updated_at     | a timestamp that includes a time zone
*/


/* Exercise createTableReservations
Create a reservations table with the following columns.
id               | an auto-incrementing integer
customer id      | an integer that cannot be null
restaurant_id    | an integer that cannot be null
wants_vegetarian | a true or false value
wants_gluten_free| a true or false value
created_at       | a timestamp that includes a time zone
updated_at       | a timestamp that includes a time zone
*/


/* Exercise createTableReviews
Create a reviews table with the following columns.

id            | an auto-incrementing integer
customer_id   | an integer that cannot be null
restaurant_id | an integer that cannot be null
rating        | an integer
comment       | a string of unlimited length
created_at    | a timestamp that includes a time zone
updated_at    | a timestamp that includes a time zone
*/
