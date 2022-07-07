const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Cerate Schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
      type: Date,
      default:Date.now
  },
});

// Model oluşturma
const Post = mongoose.model('Post', PostSchema);

// Modülü export etmek
module.exports = Post;
