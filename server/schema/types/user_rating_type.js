// const mongoose = require('mongoose');
// const graphql = require('graphql')
// const UserRating = mongoose.model('userRating');
// const GrapQLDateTime = require('./DateType')
// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLID
// } = graphql

// const UserRatingType = new GraphQLObjectType({
//   name: 'UserRatingType',
//   fields: () => ({
//     _id: { type: GraphQLID },
//     username: { type: GraphQLString },
//     content: { type: GraphQLString },
//     createdAt: { type: GrapQLDateTime },
//     numRating: { type: GraphQLInt },
//     likes: { type: GraphQLInt },
//     driveSchool: {
//       type: require('./driveSchool_type'),
//       resolve(parentValue) {
//         return UserRating.findById(parentValue).populate('driveSchool')
//           .then(userRating => {
//             return userRating.driveSchool
//           });
//       }
//     }
//   })
// })

// module.exports = UserRatingType
