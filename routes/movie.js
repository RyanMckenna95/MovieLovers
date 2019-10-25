let movies = require('../models/movies');
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

router.addMovie = (req, res) => {
    var id = Math.floor((Math.random()* 1000000) + 1);
    var currentSize = movies.length;

    movies.push({"id": id, "title" : req.body.title, "released" : req.body.released, "cost": req.body.cost, "stock": req.body.stock});

    if((currentSize + 1) == movies.length)
        res.json({message: 'Movie added'});
    else
        res.json({message: 'Movie not added'});
}

router.purchaseMovie = (req, res) => {

    var movie = getByValue(movies,req.params.id);
    if ( movie!= null) {
        movie.stock -= 1;
        res.json({status : 200, message : 'Purchase Successful' , movie: movie });
    }
    else if(movie == 0){
        res.send('This movie is out of stock')
    }
    else
        res.send('Purchase was not Successful')
}

router.deleteMovie = (req, res) => {
    //Delete the selected donation based on its id
    var donation = getByValue(movies,req.params.id);
    var index = movies.indexOf(movie);

    var currentSize = movies.length;
    movies.splice(index, 1);

    if((currentSize - 1) == movies.length)
        res.json({ message: 'Movie Deleted'});
    else
        res.json({ message: 'Unable to Delete this movie'});
}

module.exports=router;