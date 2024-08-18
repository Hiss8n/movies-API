const mongoose=require('mongoose')


const taskSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add task name'],
        maxlength:20,
        trim:true
    },
    completed:{
        type:Boolean,
        required:false,
        default:false
    }
},
{
    timestamps:true
}

)

const task=mongoose.model('task',taskSchema)
module.exports=task