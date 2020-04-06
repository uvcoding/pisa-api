# API Datastorage for Pisa Delivery Management
This API allows access and modification to the data in the database

## Port

Default listening port is #3000; Port could be changed by OS. You could see the listening port in the console after aplication stars.

## Database

Database configuration is stored in `src/module.database.js`. You need to change the following code line with your own database information:

``` [json]
{ 
    host: 'your.host.ip.or.name',
    user: 'username',
    password: 'password',
    database: 'database.name'
}
```.

## GET Requests

When you send a GET request to one of this routes, API returns a JSON file with the following information:

* `/users` list of all users.
* `/shift` list of all shifts.
* `/promos` list of all promos.
* `/products` list of all products.
* `/classes` list of all products classes.
* `/orders` list of all orders.
* `/customers` list of all customers.

## POST and PUT Request

When you send a POST request you be able to create new item in the database. Using POST request you must to include a JSON object with the required information in each case.
When you send a PUT request you be able to update new item in the database. Using PUT request you must to include a JSON object with the required information in each case and the `id` of item to be modified.

* Users default JSON object

``` [json]
{
    "id": 1,
    "username": "Some Name",
    "passHash": "Some Password Hash",
    "email": "username@domain.com",
    "creation": "2020-03-26T05:06:08.000Z"
}
```

* Shift default JSON object

``` [json]
{
    "id": 1,
    "state": "close",
    "opentimestamp": "2020-02-08T21:37:47.000Z",
    "closetimestamp": "2020-02-11T03:16:38.000Z",
    "orderQtty": 18,
    "orderTotalAmount": 5535
}
```