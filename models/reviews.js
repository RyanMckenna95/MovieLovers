let mongoose=require('mongoose');

let ReviewSchema=new mongoose.Schema({
        author: {
            type:String,
            required:true
        },
        titleID: {
            type:String,
            required:true
        },
        reviewedTitle: {
            type:String,
            required:true
        },
        review: {
            type:String,
            required:true
        },
        rating: {type:Number, min:0 , max:10, required:true},
        likes: {type:Number,default:0}
    },
    {collection:'reviews'});

module.exports=mongoose.model('Reviews', ReviewSchema);

/*const reviews = [
    {id:300001,author:'Ryan Mckenna', reviewedTitle:'1917' , review:"Cinematic and enjoyable", rating:7,likes:9},
    {id:300002,author:'Ryan Mckenna', reviewedTitle:'Blade Runner' , review:"A Classic", rating:9,likes:11},
    {id:300003,author:'John lastname', reviewedTitle:'Baby Driver' , review:"Amazing driving sequences", rating:6,likes:2}
];
module.exports = reviews;*/