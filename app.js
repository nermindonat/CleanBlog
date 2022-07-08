const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
app.get('/', async (req, res) => {
  const posts = await Post.find({}); // verileri projemizde anasayfada sıralamak için.
  res.render('index', {
    posts
  });
});

app.get('/posts/:id', async (req, res) => {
  // console.log(req.params.id);
  // res.render('about');
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post
  })
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  console.log("Gelen post isteği body si", req.body)
  await Post.create(req.body)  // body bilgisini Post modeli sayesinde veritabanında dökümana dönüştüyoruz.
    res.redirect('/');  // Anasayfaya yönlendiriyor.
  });

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
