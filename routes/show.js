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

router.addShow = (req, res) => {
    var id = Math.floor((Math.random()* 1000000) + 1);
    var currentSize = shows.length;

    shows.push({"id": id, "title" : req.body.title, "season" : req.body.season , "released" : req.body.released, "cost": req.body.cost, "stock": req.body.stock});

    if((currentSize + 1) == shows.length)
        res.json({message: 'Show added'});
    else
        res.json({message: 'Show not added'});
}

router.purchaseShow = (req, res) => {

    var show = getByValue(shows,req.params.id);
    if ( show!= null) {
        show.stock -= 1;
        res.json({status : 200, message : 'Purchase Successful' , show: show });
    }
    else if(show == 0){
        res.send('This show is out of stock')
    }
    else
        res.send('Purchase was not Successful')
}

router.deleteShow = (req, res) => {
    //Delete the selected donation based on its id
    var donation = getByValue(shows,req.params.id);
    var index = shows.indexOf(show);

    var currentSize = shows.length;
    shows.splice(index, 1);

    if((currentSize - 1) == shows.length)
        res.json({ message: 'Show Deleted'});
    else
        res.json({ message: 'Unable to Delete this show'});
}

module.exports=router;