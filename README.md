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
```

## Default JSON objects

### Users default JSON object
``` [json]
{
    "id": 1,
    "username": "Some Name",
    "passHash": "Some Password Hash",
    "email": "username@domain.com",
    "creation": "2020-03-26T05:06:08.000Z"
}
```

### Shift default JSON object
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

### Promo default JSON object
``` [json]
{
    "id": 46,
    "class": "promo.class",
    "description": "promo.name",
    "content": "promo.products",
    "price": 680,
    "creation": "2020-02-08T16:40:00.000Z"
}
```
> class property is deprecated since Pisa version 2.

### Product default JSON object
``` [json]
{
    "id": 87,
    "productClassId": 3,
    "productDescription": "your.product.description",
    "productPrice": 160,
    "creation": "2020-02-08T19:42:08.000Z"
}
```

### Product Class default JSON object
``` [json]
{
    "id": 2,
    "name": "Minutas"
}
```

### Order default JSON object
``` [json]
{
    "id": 1,
    "orderShift": 1,
    "stateid": 70,
    "customerName": "your.customer.name",
    "customerAddress": "your.customer.addess [ near.street / near.streat ]",
    "customerPhone": "11",
    "customerOrder": "your.customer.order",
    "orderSubtotal": 40,
    "orderDiscount": 0,
    "orderSurcharge": 10,
    "orderPayment": 50,
    "orderChange": 0,
    "totalOrder": 50,
    "notes": ".",
    "creation": "2020-02-08T23:04:39.000Z"
}
```

### Customer default JSON object
``` [json]
{
    "id": 1,
    "name": "your.customer.name",
    "address": "your.customer.addess",
    "nearStreetA": "near.street",
    "nearStreetB": "near.streat",
    "phone": "+541123456789",
    "creation": "2020-02-08T21:04:52.000Z"
}
```

## Default Routes
Use the following routes to access desired tables into database:

* `/users` .
* `/shift` list of all shifts.
* `/promos` list of all promos.
* `/products` list of all products.
* `/classes` list of all products classes.
* `/orders` list of all orders.
* `/customers` list of all customers.

## GET Requests
When you send a GET request to a default route, API returns a JSON file with a complitte list of each kind of object.

## POST and PUT Request
When you send a POST request to a default route,you be able to create new item in the database. Using POST request you must to include a JSON object with the required information in each case.
When you send a PUT request to a default route, you be able to update new item in the database. Using PUT request you must to include a JSON object with the required information in each case and the `id` of item to be modified.

## DELETE Request
When you send the DELETE request, you be able to eliminate one item form the database. Using DELETR request you must to include a JSON object with the required `id` to be eleiminate.