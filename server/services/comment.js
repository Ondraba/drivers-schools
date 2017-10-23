const _ = require('lodash')
const mongoose = require('mongoose');

const Comment = mongoose.model('comment');

function save({ username, content }) {
  const comment = new Comment({ username, content });

  if (!username || !content) { throw new Error('You must provide username and content.'); }

  return comment.save((err, comment) => {
    if (err) throw err
  });
}

function remove(id) {
  if (!id) { throw new Error('Comment removing failed. ID of comment was not provided.') }

  return Comment.findByIdAndRemove({ _id: id }, (err, comment) => {
    if (err) throw err
  })
}

function update(id, args = {}) {
  if (!id) { throw new Error('Comment updating failed. ID of comment was not provided.'); }

  if (!_.isEmpty(args)) {
    return Comment.findByIdAndUpdate(id, { $set: args }, { new: true })
  }
}

function findAll() {
  Comment.find({}).sort({ createdAt: -1})
}

module.exports = { save, remove, update, findAll };
