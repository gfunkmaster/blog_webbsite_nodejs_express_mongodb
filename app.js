const express = require("express");


//express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

//listen for request
app.listen(3000);

//takes in two argument, first url. second is a function takes in req and res
app.get("/", (req, res) => {
  //sets automaticly contnet type header
  //res.sendFile("./views/index.html", { root: __dirname });

  //need to render the view, when using ejs
  res.render('index')
});

//setting up routes

app.get("/about", (req, res) => {
  //sets automaticly contnet type header
  // res.send('./views/about.html')
  // send a ahtml file , we neeed to use __dirname to have correct path
  //res.sendFile("./views/about.html", { root: __dirname });

  res.render('about')
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page, use is middlewere - must be in bottom of page- because it's not scooped
app.use((req, res) => {
  // this function fire of if the rest is not matched
//   res.status(404).sendFile("./views/404.html", { root: __dirname });

    res.status(404).render('404');
});
