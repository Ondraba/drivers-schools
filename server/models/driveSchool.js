const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriveSchoolSchema = new Schema({
  nextUrl: String,
  title: String,
  perex: String,
  content: String,
  web: String,
  cars: String,
  createdAt: { type: Date, default: Date.now },
  overallRatingNumber:{ 
    type: Number,
    default: 0
  },
  ratingCount:{ 
    type: Number,
    default: 0
  },
  ratingResult:{ 
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  userRatings: [
    {
      type: Schema.Types.ObjectId,
      ref: "userRating"
    }
  ]
});

DriveSchoolSchema.statics.save = function({
  nextUrl,
  title,
  perex,
  content,
  web,
  cars
}) {
  const DriveSchool = this;
  const driveSchool = new DriveSchool({ nextUrl, title, perex, content, web, cars });

  if (!title || !content || !nextUrl) {
    throw new Error("You must provide title and content and !nextUrl!");
  }

  return driveSchool.save((err, driveSchool) => {
    if (err) throw err;
  });
};

DriveSchoolSchema.statics.findUserRatings = function(id) {
  return this.findById(id)
    .populate("userRatings")
    .then(driveSchool => driveSchool.userRatings);
};

// DriveSchoolSchema.statics.likeDriveSchool = function(id) {
//   return this.findById(id).then(driveSchool => {
//     driveSchool.likes += 1;
//     return driveSchool.save();
//   });
// };

DriveSchoolSchema.statics.addUserRating = function(
  driveSchoolId,
  username,
  content,
  numRating,
  cards
) {
  const UserRating = mongoose.model("userRating");

  return this.findById(driveSchoolId).then(driveSchool => {
    const userRating = new UserRating({
      username,
      content,
      numRating,
      driveSchool
    });
    driveSchool.userRatings.push(userRating);
    return Promise.all([userRating.save(), driveSchool.save()]).then(
      ([userRating, driveSchool]) => driveSchool
    );
  });
};

mongoose.model("driveSchool", DriveSchoolSchema);
