const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  },
  username: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('comment', CommentSchema);