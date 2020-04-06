# API Datastorage for Pisa Delivery Management
This API allows access and modification to the data in the database

## Port

Default listening port is #3000; Port could be changed by OS. You could see the listening port in the console after aplication stars.

## Database

Database congiguration are stored in `src/module.database.js`. You need to change the following code line with your own database information: `{ host: '192.168.0.200', user: 'remote', password: 'password', database: 'datos_prueba_pisa' }`.

## GET Requests

When you send a GET request to one of this routes, API returns a JSON file with the following information:

* `/users` list of all users.
* `/shift` list of all shifts.
* `/promos` list of all promos.
* `/products` list of all products.
* `/classes` list of all products classes.
* `/orders` list of all orders.
* `/customers` list of all customers.

