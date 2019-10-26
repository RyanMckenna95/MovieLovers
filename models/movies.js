let mongoose=require('mongoose');

let MovieSchema=new mongoose.Schema({
    title: String,
    released: String,
    cost: Number,
    stock: Number
},
    {collection:'movies'});

module.exports=mongoose.model('Movie', MovieSchema);



/*const movies = [
    {id:100000, title:'Avengers: End Game', released:'2019', cost:24.50, stock:1530},
    {id:100001, title:'1917', released:'2019', cost:34.00, stock:43},
    {id:100002, title:'Michael Collins', released:'1996', cost:10.00, stock:347},
    {id:100003, title:'Blade Runner', released:'1986', cost:10.00, stock:4681},
    {id:100004, title:'The Terminator', released:'1984', cost:8.30, stock:660},
    {id:100005, title:'Baby Driver', released:'2017', cost:13.50, stock:1374},

];

module.exports = movies;*/