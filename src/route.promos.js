const express = require('express');
const router = express.Router();
const db = require('./module.database');

router.route('/promos')

    .get(function(req, res) {
        db.query('SELECT * FROM pisa_promos ORDER BY id', (err, rows, fields) => {
            if(!err) { res.json(rows); } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .post(function(req,res) {
        const { description, content, price } = req.body;
        db.query('INSERT INTO pisa_promos SET description = ?, content = ?, price = ?;', [ description, content, price ], (err, rows, fields) => {
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
        const { id, description, content, price, creation } = req.body;
        db.query('UPDATE pisa_promos SET description = ?, content = ?, price = ? WHERE id = ?;', [ description, content, price, id ], (err, rows, fields) => {
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
        db.query('DELETE FROM pisa_promos WHERE id = ?', [ id ], (err, rows, fields) => {
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

router.get('/promos/:id', function(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM pisa_promos WHERE id = ?', [ id ], (err, rows, fields) => {
        if(!err) { res.json(rows[0]); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

module.exports = router;