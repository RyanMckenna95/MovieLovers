let reviews = require('../models/reviews');
let movies =require('../models/movies');
let shows =require('../models/shows');
let express = require('express');
let router = express.Router();

router.findAllReviews =(req, res) =>{

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(reviews,null,5));
}

function getByValue(array, id) {
    var result  = array.filter(function(obj){return obj.id == id;} );
    return result ? result[0] : null; // or undefined
}

router.findOneByID = (req, res) => {

    res.setHeader('Content-type','application/json');

    var movie = getByValue(reviews, req.params.id);

    if(movie != null)
        res.send(JSON.stringify(movie,null,5));
    else
        res.send('Review not found');
}

function getByName(array, title) {
    var result  = array.filter(function(obj){return obj.title == title;} );
    return result ? result[0] : null; // or undefined
}

router.addReview = (req, res) => {
    var id = Math.floor((Math.random()* 1000000) + 1);
    var currentSize = reviews.length;
    var review = getByName(movies, req.body.reviewedTitle);

    if(review != null) {
        reviews.push({
            "id": id,
            "author": req.body.author,
            "reviewedTitle": req.body.reviewedTitle,
            "review": req.body.review,
            "rating": req.body.rating,
            "likes": 0
        });
        if ((currentSize + 1) == reviews.length)
            res.json({message: 'Review added'});
        else
            res.json({message: 'Review not added'});
    }
    else
        res.send('Review not found');
}

router.likeReview = (req, res) => {

    var review = getByValue(reviews,req.params.id);
    if ( review!= null) {
        review.likes += 1;
        res.json({status : 200, message : 'Purchase Successful' , review: review });
    }
    else
        res.send('error liking')
}

router.deleteReview = (req, res) => {
    //Delete the selected donation based on its id
    var review = getByValue(reviews,req.params.id);
    var index = reviews.indexOf(review);

    var currentSize = reviews.length;
    reviews.splice(index, 1);

    if((currentSize - 1) == reviews.length)
        res.json({ message: 'Review Deleted'});
    else
        res.json({ message: 'Unable to Delete this movie review'});
}

module.exports=router;