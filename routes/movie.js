let movies = require('../models/movies');
let shows = require('../models/shows');
let express = require('express');
let router = express.Router();

router.findAllMovies =(req, res) =>{

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(movies,null,5));
}

function getByValue(array, id) {
    var result  = array.filter(function(obj){return obj.id == id;} );
    return result ? result[0] : null; // or undefined
}

router.findOneByID = (req, res) => {

    res.setHeader('Content-type','application/json');

    var movie = getByValue(movies, req.params.id);

    if(movie != null)
        res.send(JSON.stringify(movie,null,5));
    else
        res.send('Movie not found');
}


module.exports=router;