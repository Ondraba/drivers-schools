const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  perex: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('article', ArticleSchema);
