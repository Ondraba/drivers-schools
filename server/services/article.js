const mongoose = require('mongoose');

const Article = mongoose.model('article');

function save({ title, perex = '', content }) {
  const article = new Article({ title, perex, content });

  if (!title || !content) { throw new Error('You must provide title, content and date of creation.'); }

  return article.save(function(err, article) {
    if (err) throw err;
    console.log(article);
  });
}

function remove(id) {
  if (!id) { throw new Error('Article removing failed. ID of article was not provided.'); }

  return Article.remove({ _id: id }, function (err, article) {
    console.log("removing article with ID ", id);
    if (err) throw err;
  });
}

function findAll() {
  Article.find(function(err, articles) {
    if (err) console.log(err);
  });
}

module.exports = { save, remove, findAll };
