const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Vendor {
    id: ID!
    name: String!
    contact: String
  }

  input VendorInput {
    name: String!
    contact: String
  }

  type Query {
    getVendor(id: ID!): Vendor
    getAllVendors: [Vendor]
  }

  type Mutation {
    createVendor(input: VendorInput!): Vendor
    updateVendor(id: ID!, input: VendorInput!): Vendor
    deleteVendor(id: ID!): Boolean
  }
`);

module.exports = schema;
