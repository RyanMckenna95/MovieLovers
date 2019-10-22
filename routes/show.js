let shows = require('../models/shows');
let express = require('express');
let router = express.Router();


router.findAllShows =(req, res) =>{

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(shows,null,5));
}

module.exports=router;