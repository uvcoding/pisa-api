const express = require('express');
const router = express.Router();
const db = require('./module.database');

router.route('/classes')

    .get(function(req, res) {
        db.query('SELECT * FROM pisa_products_classes ORDER BY id', (err, rows, fields) => {
            if(!err) { res.json(rows);} 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .post(function(req,res) {
        const { name } = req.body;
        db.query('INSERT INTO pisa_products_classes SET name = ?;', [ name ], (err, rows, fields) => {
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
        const { id, name } = req.body;
        db.query('UPDATE pisa_products_classes SET name = ? WHERE id = ?;', [ name, id ], (err, rows, fields) => {
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
        db.query('DELETE FROM pisa_products_classes WHERE id = ?', [ id ], (err, rows, fields) => {
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

router.get('/classes/qtty/:classId', function(req, res) {
    const { classId } = req.params;
    db.query('SELECT COUNT( id ) FROM datos_prueba_pisa.pisa_products AS productInClass WHERE productClassId = ?', [ classId ], (err, rows, fields) => {
        if(!err) { res.json(rows[0]); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

module.exports = router;