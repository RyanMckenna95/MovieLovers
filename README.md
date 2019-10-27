# MovieLovers

## Ryan Mckenna - 20076596

### routes and models
- Movies model & Movie route<br>
- shows model & Show route<br>
- Reviews model & Review route<br>

The movieLovers app had 3 models and routes (movies, shows, and reviews) there are get requests for  findAllMovies, Shows, and reviews, with a path like */movie*.<br>

The are also findByID's for each of them. With paths like */show/:id*. Reviews also has a findByAuthor which searches the review authors and returns reviews by the searched name.  and the findByAuthor path was */review/author/:author* <br>

Both movie and show have put purchase(Movie/Show) this lower the stock by one but does not put anything into a checkout box yet.
neither a movie or review can be deleted with anything greater then 0 in their stock.

Delete movie or show had a path */show/:id/:stock* this was as the deleteMove and deleteShow could only work if the stock was empty as it is for site maintance and they would not want to delete a movie they still have in stock.

### persistense
I had a mongodb database and connect to mongodb.atlas

### git
used github for my repo

### DX approach 
I tried using agile method to develop the app building and scaling the app gradually making improvements to all features.

### youtube
my demo: https://youtu.be/AibJIj9xyd4

### references

deleting : https://jsao.io/2018/04/creating-a-rest-api-handling-post-put-and-delete-requests/ <br>
put request issues: https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8 <br>
lab notes: https://tutors-design.netlify.com/course/wit-wad-2-2019.netlify.com <br>
