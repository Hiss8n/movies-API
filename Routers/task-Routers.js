const express=require('express')
const TaskRouter=express.Router()

const{getOneTask,addATask}=require('../Controllers/task-Controllers.js')






TaskRouter.get('/:id',getOneTask)
TaskRouter.post('/',addATask)



module.exports=TaskRouter;