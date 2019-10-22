let shows = require('../models/shows');
let express = require('express');
let router = express.Router();


router.findAllShows =(req, res) =>{

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(shows,null,5));
}

function getByValue(array, id) {
    var result  = array.filter(function(obj){return obj.id == id;} );
    return result ? result[0] : null; // or undefined
}

router.findOneByID = (req, res) => {

    res.setHeader('Content-type','application/json');

    var show = getByValue(shows, req.params.id);

    if(show != null)
        res.send(JSON.stringify(show,null,5));
    else
        res.send('Show not found');
}

module.exports=router;