    
/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/* 
Configure MySQL
*/
const mysql = require('mysql');
const connexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port: 8889,
    database : 'node-boiler-plate'
});
connexion.connect();
//

/*
Définition du CRUD
*/
// Create Item: POST
router.post('/article', (req, res) => {

    /* 
    Pour créer un article il faut une valeur pour :
    - title
    - content
    */
        if( 
            req.body &&
            req.body.title.length > 0 &&
            req.body.content.length > 0
         ){
             // Définir l'item
            const newItem = { title: req.body.title, content: req.body.content};

            // Enregistrer l'item
            connexion.query(`INSERT INTO post SET ?`, newItem, (err, result, fields) => {
                if( err ){
                    res.json({ msg: 'Connection fail', data: err })
                }
                else {
                    res.json({ msg: 'Create Article', data: result })
                }
            })

        }
        else{
            res.json({ msg: 'No data', data: null })
        }
    //


    
});

// Read all Items: GET
router.get('/article', (req, res) => {
    res.json({ msg: 'Read all Article' })
});

// Read one Item: GET
router.get('/article/:id', (req, res) => {
    res.json({ msg: 'Read one Article' })
});

// Update one Item: PUT
router.put('/article/:id', (req, res) => {

    /* 
        Pour éditer un article il faut une valeur pour :
        - title
        - content
    */


    res.json({ msg: 'Update one Article' })
});

// Delete one Item: DELETE
router.delete('/article/:id', (req, res) => {
    res.json({ msg: 'Delete one Article' })
});
//


/*
Exporter le module de route
*/
module.exports = router;
//