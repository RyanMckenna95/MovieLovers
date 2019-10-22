let movies = require('../models/movies');
let shows = require('../models/shows');
let express = require('express');
let router = express.Router();

router.findAllMovies =(req, res) =>{

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(movies,null,5));
}


module.exports=router;