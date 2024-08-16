const Movie=require('../model/movie-Models.js')





const getOneMovie=async(req,res)=>{
    try {

        const {id}=req.params;
        const movie=await Movie.findById(id)

        if(!movie){
           return res.status(500).json({message:'No such movies found..'})
        }
        res.status(200).json({movie})
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}

const getAllMovies=async(req,res)=>{

    try {
        const movies=await Movie.find();

        res.status(200).json({movies})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}


const addAMovie=async(req,res)=>{
    try {

        const movie=await Movie.create(req.body)

        res.status(200).json({movie})
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}


const updateAMovie=async(req,res)=>{
    try {

        const {id}=req.params;

        const movie=await Movie.findByIdAndUpdate(id,req.body,{new:true})
      if(!movie){
            return res.status(404).json({message:'could not update,not found'})
      }   
      
      res.status(200).json(movie)
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}


const deleteAMovie=async(req,res)=>{
    try {

        const {id}=req.params;
        const movie=await Movie.findByIdAndDelete(id)


        if(!movie){
            return res.status(404).json({message:'Not found,could not delete now,try again later'})
        }
        res.status(200).json({message:"Movie deleted successfully!!!"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}



module.exports={getAllMovies,getOneMovie,addAMovie,updateAMovie,deleteAMovie}