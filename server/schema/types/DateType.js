const { Factory } = require('graphql-moment')

const GraphQLDateTime = Factory('D. M. YYYY H:mm', 'DateTime')

module.exports = GraphQLDateTime
