const Blog = require("../models/blog.js");

const blog_index = (req, res) => {
    //sort be the newest, createdAt is a timestamp
    Blog.find()
        .sort({
            createdAt: -1
        })
        .then((result) => {
            res.render("index", {
                title: "All Blogs",
                blogs: result
            });
        })
        .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("details", {
                blog: result,
                title: "Blog Details"
            });
        })
        .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
    res.render("create", {
        title: "Create"
    });
};

const blog_create_post = (req, res) => {
    //we created a new instance. Then we passed the form data = req.body == object to the new blog
    const blog = new Blog(req.body);

    //we use, it's async. then we redirect our sit to the blogs where the form has been send
    blog
        .save()
        .then((result) => {
            res.redirect("./blogs");
        })
        .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({
                redirect: "/blogs"
            });
        })
        .catch((err) => console.log(err));
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
};