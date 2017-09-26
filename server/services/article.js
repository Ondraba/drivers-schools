const _ = require('lodash')
const mongoose = require('mongoose');

const Article = mongoose.model('article');

function save({ title, perex = '', content }) {
  const article = new Article({ title, perex, content });

  if (!title || !content) { throw new Error('You must provide title, content and date of creation.'); }

  return article.save((err, article) => {
    if (err) throw err
  });
}

function remove(id) {
  if (!id) { throw new Error('Article removing failed. ID of article was not provided.') }

  return Article.findByIdAndRemove({ _id: id }, (err, article) => {
    if (err) throw err
  })
}

function update(id, args = {}) {
  if (!id) { throw new Error('Article updating failed. ID of article was not provided.'); }

  if (!_.isEmpty(args)) {
    return Article.findByIdAndUpdate(id, { $set: args }, { new: true })
  }
}

function findAll() {
  Article.find({}).sort({ createdAt: -1})
}

module.exports = { save, remove, update, findAll };
