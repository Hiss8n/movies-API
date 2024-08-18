


const mongoose=require('mongoose')
require('dotenv').config()
const MONGO_DB_TASKS=process.env.MONGO_DB_TASKS


// Create separate connections for different databases
const connection1 = mongoose
.createConnection(MONGO_DB_TASKS)

//.then(()=>console.log('Connected to the Task db success.')).catch((e)=>console.log(e))

if(connection1){
    console.log('Connected success to Task data base...')
}


module.exports=connection1





