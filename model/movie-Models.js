const mongoose=require('mongoose');




const MoveieSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true
            ,"Enter movie name"
        ]
    },
    genre:{
        type:String,

    },
    season:{
        type:Number
    },
    price:{
        type:Number,
        require:[true,"Enter the price plesae!"]
    }
},
{
    timestamp:true
}

)

const movie=mongoose.model('movie',MoveieSchema)

module.exports=movie;