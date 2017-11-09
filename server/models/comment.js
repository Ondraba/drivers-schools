const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  },
  username: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  likes: {
    type: Number,
    default: 0
  }
});

CommentSchema.statics.likeComment = function(id) {
  return this.findById(id)
    .then(comment => {
      comment.likes += 1;
      return comment.save();
    })
}

mongoose.model('comment', CommentSchema);
