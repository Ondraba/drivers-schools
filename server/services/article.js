const mongoose = require('mongoose');

const Article = mongoose.model('article');

function save({ title, perex = '', content, createdAt }) {
  const article = new Article({ title, perex, content, createdAt});

  if (!title || !content || !createdAt) { throw new Error('You must provide title, content and date of creation.'); }

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
    console.log(articles.length);
    // for (let i = 0; i < articles.length; i++) {
    //   console.log(articles[i]);
    //   console.log('formatted created at: ', articles[i].createdAt.toLocaleDateString());
    // }
  });
}

module.exports = { save, remove, findAll };
