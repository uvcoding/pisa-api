const express = require('express');
const app = express();

/* Configuración */
app.set('port', process.env.PORT || 3000)
app.set( 'Access-Control-Allow-Origin', '*' );
app.set( 'Access-Control-Allow-Headers', '*');
app.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
app.set( 'Content-Type', 'application/json' );

/* Middlewares */
app.use(express.json());

/* Objetos predefinidos */
let respuesta = { error: false, codigo: 200, mensaje: '' };

/* Rutas */
app.use(require('./src/route.customers'));
app.use(require('./src/route.orders'));
app.use(require('./src/route.products'));
app.use(require('./src/route.products.classes'));
app.use(require('./src/route.promos'));
app.use(require('./src/route.shifts'));
app.use(require('./src/route.users'));

/* Respuesta generíca e informativa */
app.all('/', function(req, res) {
 respuesta = { error: false, codigo: 200, mensaje: 'Datastorage API for Pisa | Delivery Management | Version 1.0.0' };
 res.status(200).send(respuesta);
});

/* Respuesta genérica para páginas no encontradas */
app.use(function(req, res, next) {
 respuesta = { error: true, codigo: 404, mensaje: '404 | Not Found' };
 res.status(404).send(respuesta);
});

/* Inicializando el servior */
app.listen( app.get('port') , () => {
 console.log("Listening port", app.get('port') );
});