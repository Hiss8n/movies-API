const express=require('express')

const{getOneMovie,getAllMovies, addAMovie, deleteAMovie}=require('../Controllers/movie-Controllers.js')

const Router=express.Router()





Router.get('/:id',getOneMovie)

Router.get('/',getAllMovies)

Router.post('/',addAMovie)

Router.put('/:id',getOneMovie)

Router.delete('/:id',deleteAMovie)

module.exports=Router;

