let movies = require('../models/movies');
let express = require('express');
let router = express.Router();

router.findAll =(req, res) =>{

    res.json(movies);
}

module.exports=router;