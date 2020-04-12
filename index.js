const express = require('express');
const router = require('./network');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

var app = express();
app.use(bodyParser.json());
app.use(router);



app.listen(port, ()=>{
    console.log(`Escuchando en http://localhost:${port}/`)
});