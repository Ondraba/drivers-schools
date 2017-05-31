const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  perex: String,
  content: String,
  createdAt: Date
});

mongoose.model('article', ArticleSchema);
