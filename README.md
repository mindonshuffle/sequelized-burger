# sequelized-burger

Sequelized Burger is a version of the "Eat Da Burger" app refactored to use Sequelize ORM instead of direct MySQL queries.

The user can specify a "burger name" in the input box, which will create a new entry in the database and will be displayed in the left-hand column of the page.

If the user clicks the associated "Devour" button, the burger's "devoured" attribute will be set to true in the database, and the burger will be moved to the left-hand column of the page.
