


const mongoose=require('mongoose')
require('dotenv').config()
const MONGO_DB=process.env.MONGO_DB


mongoose.connect(MONGO_DB)
.then(()=>console.log('Connected to the Database.')).catch((e)=>console.log(e))