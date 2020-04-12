const db = require('mongoose');
const Schema = db.Schema;

const mySchema = new Schema({
	course : String,
	teacher: String,
	classess : new Array()
});

const model = db.model("courses",mySchema);

db.Promise = global.Promise;
db.connect("mongodb://localhost:27017/platzi_mongo", {useNewUrlParser: true});

async function traerTodos(){
    const datos = await model.find()
    //console.log(datos);
    return datos;
}

module.exports = {
    getAll : traerTodos
}