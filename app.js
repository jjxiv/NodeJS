const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
mongoose.set('strictQuery',true); // only for warning suppresion


//express app
const app = express();
app.set('view engine','ejs'); 
app.set('/views','myviews');

let name = "hello word";

//middleware & static files
// app.use(express.static('public'));
// app.use(morgan('dev'));

// connect to mongoDB
const dbURI = 'mongodb+srv://jjxiv:u3iGM6sLBJYw.mT@jjdb.wmbxd1r.mongodb.net/SampleDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err));

//register view engine

let blogTitle = "Programming Compe";
let snippet = "Interesting";
let body = "loerm ipsum asdjfhsadkljfhasdjkf sadfjklhsdfjks";

//mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title: blogTitle,
        snippet: snippet,
        body: body
    });
    //SAVING THE COLLECTION
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});

//RETRIEVING ALL THE COLLECTIONS
app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
});


//RETRIEVE A SINGLE BLOG
app.get('/single-blog',(req,res)=>{
    Blog.findById('6395e89de5b140810e0f69c9')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
});

//index.ejs
app.get('/',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.render('index',{title: 'TITLE123',blogs: result});
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
});


//blog routes
app.get('/blogs',(req,res) =>{
    Blog.find()
        .then((result)=>{
            res.render('index',{title: 'ok',blogs: result});
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
})


//about.ejs
app.get('/about', (req,res) =>{
    res.render('about',{title: 'About'});
});


//create.ejs
app.get('/blogs/create',(req,res) => {
    res.render('create');
})

//404-page
app.use((req,res)=>{
    res.status(404).render('404');
});