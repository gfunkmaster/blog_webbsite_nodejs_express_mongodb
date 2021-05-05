const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// schema defiens structure of our documents 
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps: true});

//Next create model, model is the thing that sorounds and creates interface  witch comminu with database

//name is important in param, because it communicats with database
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
