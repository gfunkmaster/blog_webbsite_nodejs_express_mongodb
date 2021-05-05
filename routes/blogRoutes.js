const express = require('express')
const {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
} = require('../controllers/blogController.js')

const router = express.Router();

// Blog routes
router.get('/', blog_index)

router.post('/', blog_create_post)

//create a blog post
router.get('/create', blog_create_get)


// get a indivd 
router.get('/:id', blog_details)

// delete req
router.delete('/:id', blog_delete)




module.exports = router


//   MVC Basics

// stand for Model, View, Controller
// MVC is a way of structuring our code & files
// Keeps code more modula, reusable & easier to read