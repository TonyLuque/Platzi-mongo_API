const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.traerCursos().then(datos =>{
        json = JSON.stringify(datos);
        res.status(200).send(json);
    }); 
});

router.post('/', (req, res) => {
    controller.añadirCurso(req.body.user, req.body.message);
    res.send('Hola desde post');
});

module.exports = router;