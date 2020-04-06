# API Datastorage for Pisa Delivery Management
This API allows access and modification to the data in the database

## Port

Default listening port is #3000; Port could be changed by OS. You could see the listening port in the console after aplication stars.

## Database

Database configuration is stored in `src/module.database.js`. You need to change the following code line with your own database information:
`{ host: '192.168.0.200', user: 'remote', password: 'password', database: 'datos_prueba_pisa' }`.

## GET Requests

When you send a GET request to one of this routes, API returns a JSON file with the following information:

* `/users` list of all users.
* `/shift` list of all shifts.
* `/promos` list of all promos.
* `/products` list of all products.
* `/classes` list of all products classes.
* `/orders` list of all orders.
* `/customers` list of all customers.

## POST Request

When you send a POST request you be able to create new items in the database. Using POST request you need to send also a JSON object with the required information in each case.

### Users

Default JSON user object is:

``` [json]
{
    "id": 1,
    "username": "Jorge Pauvels",
    "passHash": "abc1234568",
    "email": "jcvels@uvcoding.com.ar",
    "creation": "2020-03-26T05:06:08.000Z"
}
```