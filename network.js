const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
    db.getAll().then(datos =>{
        console.log(req.params)
        res.status(200).send(datos);
    });
});

router.get('/:id', (req, res) => {
    db.getOne(req.query.id).then(datos =>{
        console.log(req.params)
        res.status(200).send(datos);
    });
});

router.post('/', (req, res) => {
    res.send('Hola desde post');
});

module.exports = router;