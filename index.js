const express=require('express')
const cors=require('cors')
require('dotenv').config()
require('./db/movise.js')
//require('./lodash.js')
require('./db/task-db.js')
const Router=require('./Routers/movie-Routers.js')
const TaskRouter=require('./Routers/task-Routers.js')





const app=express()

app.use(express.json())
app.use(cors())



app.use('/api/V1/tasks',TaskRouter)
app.use('/api/movies',Router)






const PORT=process.env.PORT||3000

app.listen(PORT,()=>console.log(`Running at port ${PORT}...`))