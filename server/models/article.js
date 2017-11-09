const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  perex: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

ArticleSchema.statics.findComments = function(id) {
  return this.findById(id)
    .populate('comments')
    .then(article => article.comments);
}

ArticleSchema.statics.likeArticle = function(id) {
  return this.findById(id)
    .then(article => {
      article.likes += 1;
      return article.save();
    })
}

ArticleSchema.statics.addComment = function(id, username, content) {
  const Comment = mongoose.model('comment');

  return this.findById(id)
    .then(article => {
      const comment = new Comment({ username, content, article })
      article.comments.push(comment)
      return Promise.all([comment.save(), article.save()])
        .then(([comment, article]) => article);
    });
}

mongoose.model('article', ArticleSchema);
