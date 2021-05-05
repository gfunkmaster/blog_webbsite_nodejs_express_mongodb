const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');


//express app
const app = express();

//conncet to mongodb
const dbURL = `mongodb+srv://gfunkmaster:12345@node-express-mongodb.5fn1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// register view engine 
app.set('view engine', 'ejs')

//middleware & static files
app.use(express.static('public'))
//morgan is thir-party package, loggs out oue request
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

//takes in two argument, first url. second is a function takes in req and res
app.get("/", (req, res) => {
  //sets automaticly contnet type header
  //res.sendFile("./views/index.html", { root: __dirname });
  
  res.redirect('/blogs')
});

//setting up routes
app.get("/about", (req, res) => {
  //sets automaticly contnet type header
  // res.send('./views/about.html')
  // send a ahtml file , we neeed to use __dirname to have correct path
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render('about', {title: 'About'})
});

//redirects
/* app.get("/about-us", (req, res) => {
  res.redirect("/about");
}); */


//blog Routes
app.use('/blogs',blogRoutes)

//404 page, use is middlewere - must be in bottom of page- because it's not scooped
app.use((req, res) => {
  // this function fire of if the rest is not matched
//   res.status(404).sendFile("./views/404.html", { root: __dirname });

    res.status(404).render('404', {title: '404'});
});



// Middleware
// code wich runs (on the server) between getting a request and sending a response
// Logger middleware to log details of every request
// Authentication check middleware for protected routes
// Middleware to parse JSON data from request
// Return 404 pages

//next makes our middleware to go next after it's done  our middleware
/* app.use((req,res, next) => {
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
  next()
})
 */

// mongoose and mongo sandbox routes
/* app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'New Blog 2',
    snippet: 'About my new Blog',
    body: 'More about my new blog'
  });
  blog.save()
    .then((result) =>{
      res.send(result)
    })
    .catch((err) =>{
      console.log(err);
    })
}) */

//getting all the data blogs
/* app.get('/all-blogs', (req, res) => {
  Blog.find()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => console.log(err))
}) */

//find a single blog
/* app.get('/single-blog', (req, res) => {
  Blog.findById('609261958b939109b3ef7e7b')
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
}) */


// Route Parameters
// the variable part of the route that may change value
// localhost:3000/blogs/:id <--- can change
// localhost:3000/blogs/21334 