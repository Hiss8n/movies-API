const Task=require('../model/tasks-Model.js')

const getOneTask=async(req,res)=>{
    try {

        const {id}=req.params;

        const task=await Task.findById(id)
        if(!task){
            return res.status(404).json({msg:`No task with${id} found`})
        }

        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }
}


const addATask=async(req,res)=>{
    try {
        const task= await Task.create(req.body)


        res.status(201).json({task})
    } catch (error) {

        res.status(500).json({msg:error.msg})
        
    }
}


module.exports={getOneTask,addATask}