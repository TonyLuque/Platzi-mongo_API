const db = require('./db');


function añadirCurso(user, message){
    console.log(user);
    console.log(message)
}

function traerCursos(){
    return new Promise(async(resolve, reject)=>{
        resolve(db.getAll());
    });
}

module.exports = {
    añadirCurso,
    traerCursos
}