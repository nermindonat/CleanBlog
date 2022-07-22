const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}); // verileri projemizde anasayfada sıralamak için.
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  // console.log(req.params.id);
  // res.render('about');
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body); // body bilgisini Post modeli sayesinde veritabanında dökümana dönüştüyoruz.
  res.redirect('/'); // Anasayfaya yönlendiriyor.
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`); // $ : bir değişkenle yazmak
};


exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
  };
