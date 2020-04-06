const express = require('express');
const router = express.Router();
const db = require('./module.database');

router.route('/shifts')

    .get(function(req, res) {
        db.query('SELECT * FROM pisa_shifts ORDER BY id', (err, rows, fields) => {
            if(!err) { res.json(rows); } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .post(function(req,res) {
        const { state, opentimestamp } = req.body;
        db.query('INSERT INTO pisa_shifts SET state = ?, opentimestamp = ?;', [ state, opentimestamp ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Created' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .put(function(req,res) {
        const { id, state, closetimestamp, orderQtty, orderTotalAmount } = req.body;
        db.query('UPDATE pisa_shifts SET state = ?, closetimestamp = ?, orderQtty = ?, orderTotalAmount = ? WHERE id = ?;', [ state, closetimestamp, orderQtty, orderTotalAmount, id ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Updated' };     
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
        db.query('DELETE FROM pisa_shifts WHERE id = ?', [ id ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Deleted' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    }
);

router.get('/shifts/:id', function(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM pisa_shifts WHERE id = ?', [ id ], (err, rows, fields) => {
        if(!err) { res.json(rows[0]); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

module.exports = router;