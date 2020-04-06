const express = require('express');
const router = express.Router();
const db = require('./module.database');

router.route('/products')

    .get(function(req, res) {
        db.query('SELECT * FROM pisa_products ORDER BY id', (err, rows, fields) => {
            if(!err) { res.json(rows); } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .post(function(req,res) {
        const { productClassId, productDescription, productPrice } = req.body;
        db.query('INSERT INTO pisa_products SET productClassId = ?, productDescription = ?, productPrice = ?;', [ productClassId, productDescription, productPrice ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Creado' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .put(function(req,res) {
        const { id, productClassId, productDescription, productPrice, creation } = req.body;
        db.query('UPDATE pisa_products SET productClassId = ?, productDescription = ?, productPrice = ? WHERE id = ?;', [ productClassId, productDescription, productPrice, id ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Actualizado' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .delete(function(req,res){
        const { id } = req.body;
        db.query('DELETE FROM pisa_products WHERE id = ?', [ id ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Eliminado' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    }
);

router.get('/products/:id', function(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM pisa_products WHERE id = ?', [ id ], (err, rows, fields) => {
        if(!err) { res.json(rows[0]); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

router.get('/products/class/:classId', function(req, res) {
    const { classId } = req.params;
    db.query('SELECT * FROM pisa_products WHERE productClassId = ?', [ classId ], (err, rows, fields) => {
        if(!err) { res.json(rows); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

module.exports = router;