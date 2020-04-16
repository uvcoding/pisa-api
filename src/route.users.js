const express = require('express');
const router = express.Router();
const db = require('./module.database');

router.route('/users')

    .get(function(req, res) {
        db.query('SELECT * FROM pisa_users ORDER BY id', (err, rows, fields) => {
            if(!err) 
            { 
                res.set( 'Access-Control-Allow-Origin', '*' );
                res.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
                res.set( 'Access-Control-Allow-Headers', '*');
                res.json(rows);
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    })

    .post(function(req,res) {
        const { username, email, name, surname } = req.body;
        db.query('INSERT INTO pisa_users SET username = ?, email = ?, name = ?, surname = ?;', [ username, email, name, surname ], (err, rows, fields) => {
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
        const { id, username, password, email, name, surname } = req.body;
        db.query('UPDATE pisa_users SET username = ?, password = ?, email = ?, name = ?, surname = ? WHERE id = ?;', [ username, password, email, name, surname, id ], (err, rows, fields) => {
            if(!err) {
                let reply = { error: false, codigo: 200, mensaje: 'Actualizado' };     
                res.status(200).send( reply ); 
            } 
            else {
                let reply = { error: true, codigo: 400, mensaje: err };
                res.status(400).send( reply );
            }
        });
    }
);

router.get('/users/:id', function(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM pisa_users WHERE id = ?', [ id ], (err, rows, fields) => {
        if(!err) { res.json(rows[0]); } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

router.get('/users/delete/:id', function(req,res) {
    const { id } = req.params;
    db.query('DELETE FROM pisa_users WHERE id = ?', [ id ], (err, rows, fields) => {
        if(!err) {
            let reply = { error: false, codigo: 200, mensaje: 'Eliminado' };
            res.set( 'Access-Control-Allow-Origin', '*' );
            res.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
            res.set( 'Access-Control-Allow-Headers', '*');     
            res.status(200).send( reply ); 
        } 
        else {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });
});

router.get('/users/validate/:username/:password', function(req, res) {

    const { username, password } = req.params;
    db.query('SELECT * FROM pisa_users WHERE username = ?', [ username ], (err, rows, fields) => {
        if(!err) { 

            let reply;

            try 
            {
                if ( rows[0].password == password ) 
                { 
                    reply = 
                    { 
                        id: rows[0].id,
                        username: rows[0].username,
                        email: rows[0].email,
                        name: rows[0].name,
                        surname: rows[0].surname,
                        admin: rows[0].admin,
                        validation: true
                    };
                }
                else { reply = { validation: false }; }                
            } 
            
            catch (error) { reply = { validation: false }; }

            res.set( 'Access-Control-Allow-Origin', '*' );
            res.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
            res.set( 'Access-Control-Allow-Headers', '*');
            res.json( reply );
        
        } 
        else
        {
            let reply = { error: true, codigo: 400, mensaje: err };
            res.status(400).send( reply );
        }
    });

});

module.exports = router;