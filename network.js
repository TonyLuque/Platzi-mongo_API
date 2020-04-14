const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
    db.getAll().then(datos =>{
        console.log(req.params);
        res.status(200).send(datos);
    });
});

router.get('/:id', (req, res) => {
    db.getOne(req.params.id).then(datos =>{
        console.log(req.params);
        //console.log(datos.teacher + datos.course);
        //console.log(datos);
        //res.status(200).send(datos);//envia todos los datos
        res.status(200).send(datos.teacher+'\n'+ JSON.stringify(datos.classess));
    });
});

router.post('/', (req, res) => {
    res.send('Hola desde post');
});

module.exports = router;