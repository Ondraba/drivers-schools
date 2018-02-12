const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRatingSchema = new Schema({
  userRating: {
    type: Schema.Types.ObjectId,
    ref: 'userRating'
  },
  username: String,
  content: String,
  numRating: Number,
  createdAt: { type: Date, default: Date.now },
  likes: {
    type: Number,
    default: 0
  }
});

UserRatingSchema.statics.likeUserRating = function(id) {
  return this.findById(id)
    .then(userRating => {
      userRating.likes += 1;
      return userRating.save();
    })
}

mongoose.model('userRating', UserRatingSchema);
