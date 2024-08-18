


const mongoose = require('mongoose');

require('dotenv').config()

const MONGO_DB=process.env.MONGO_DB

// Create separate connections for different databases
const connection2 = mongoose
.createConnection(MONGO_DB)

if(connection2){
    console.log('connection to Movies data base completed...!!!')
}

// Define models separately for each connection
// const Model1 = connection1.model('Model1', new mongoose.Schema({ /* schema definition */ }));
//const Model2 = connection2.model('Model2', new mongoose.Schema({ /* schema definition */ })); 

//.then(()=>comsole.log('Connected to the movies db success')).catch((e)=>console.log(e))

module.exports=connection2
 