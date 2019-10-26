let reviews = require('../models/reviews');
let movies =require('../models/movies');
let shows =require('../models/shows');
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
var Review = require('../models/reviews')

mongoose.connect('mongodb://localhost:27017/movieLoverdbs');

router.findAllReviews =(req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Review.find(function (err, reviews) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(reviews, null, 5));
    })
}


function getByValue(array, id) {
    var result  = array.filter(function(obj){return obj.id == id;} );
    return result ? result[0] : null; // or undefined
}

router.findOneByID = (req, res) => {

    res.setHeader('Content-type','application/json');

    Review.find({"_id":req.params.id},function (err, review) {
        if(err)
            res.json({message: 'Movie not found', errmsg:err});
        else
            res.send(JSON.stringify(review,null,5));
    });
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

 /*router.editReview =(req, res , next) => {
    review = findByIdAndUpdate({id:req.params.id},req.body).then(function(){
       review.findOne({id:req/params.id}).then(function(review){
           res.send(review);
       });
   });


}
*/
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