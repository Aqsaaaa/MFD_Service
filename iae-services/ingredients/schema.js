const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Ingredient {
    id: ID!
    name: String!
    unit: String!
  }

  input IngredientInput {
    name: String!
    unit: String!
  }

  type Query {
    getIngredient(id: ID!): Ingredient
    getAllIngredients: [Ingredient]
  }

  type Mutation {
    createIngredient(input: IngredientInput!): Ingredient
    updateIngredient(id: ID!, input: IngredientInput!): Ingredient
    deleteIngredient(id: ID!): Boolean
  }
`);

module.exports = schema;
