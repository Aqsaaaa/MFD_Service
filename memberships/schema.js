const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Membership {
    id: ID!
    user_id: Int!
    points: Int
  }

  input MembershipInput {
    user_id: Int!
    points: Int
  }

  type Query {
    getMembership(id: ID!): Membership
    getAllMemberships: [Membership]
  }

  type Mutation {
    createMembership(input: MembershipInput!): Membership
    updateMembership(id: ID!, input: MembershipInput!): Membership
    deleteMembership(id: ID!): Boolean
  }
`);

module.exports = schema;
