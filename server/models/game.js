const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: String,
  perex: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  sumRating: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  userRatings: [{
    type: Schema.Types.ObjectId,
    ref: 'userRating'
  }]
});

GameSchema.statics.save = function({ title, perex, content }) {
  const Game = this;
  const game = new Game({ title, perex, content });

  if (!title || !content) { throw new Error('You must provide title and content'); }

  return game.save((err, game) => {
    if (err) throw err
  });
}

GameSchema.statics.findUserRatings = function(id) {
  return this.findById(id)
    .populate('userRatings')
    .then(game => game.userRatings);
}

GameSchema.statics.likeGame = function(id) {
  return this.findById(id)
    .then(game => {
      game.likes += 1;
      return game.save();
    })
}

GameSchema.statics.addUserRating = function(id, username, content, numRating) {
  const UserRating = mongoose.model('userRating');

  return this.findById(id)
    .then(game => {
      const userRating = new UserRating({ username, content, numRating, game })
      game.userRatings.push(userRating)
      return Promise.all([userRating.save(), game.save()])
        .then(([userRating, game]) => game);
    });
}

mongoose.model('game', GameSchema);
