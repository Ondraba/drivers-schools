const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriveSchoolSchema = new Schema({
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

DriveSchoolSchema.statics.save = function({ title, perex, content }) {
  const DriveSchool = this;
  const driveSchool = new DriveSchool({ title, perex, content });

  if (!title || !content) { throw new Error('You must provide title and content'); }

  return driveSchool.save((err, driveSchool) => {
    if (err) throw err
  });
}

DriveSchoolSchema.statics.findUserRatings = function(id) {
  return this.findById(id)
    .populate('userRatings')
    .then(driveSchool => driveSchool.userRatings);
}

DriveSchoolSchema.statics.likeDriveSchool = function(id) {
  return this.findById(id)
    .then(driveSchool => {
      driveSchool.likes += 1;
      return driveSchool.save();
    })
}

DriveSchoolSchema.statics.addUserRating = function(id, username, content, numRating) {
  const UserRating = mongoose.model('userRating');

  return this.findById(id)
    .then(driveSchool => {
      const userRating = new UserRating({ username, content, numRating, driveSchool })
      driveSchool.userRatings.push(userRating)
      return Promise.all([userRating.save(), driveSchool.save()])
        .then(([userRating, driveSchool]) => driveSchool);
    });
}

mongoose.model('driveSchool', DriveSchoolSchema);
