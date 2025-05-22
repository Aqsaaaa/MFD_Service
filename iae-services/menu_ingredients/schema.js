const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type MenuIngredient {
    id: ID!
    menu_id: Int!
    ingredient_id: Int!
    quantity: Float!
  }

  input MenuIngredientInput {
    menu_id: Int!
    ingredient_id: Int!
    quantity: Float!
  }

  type Query {
    getMenuIngredient(id: ID!): MenuIngredient
    getAllMenuIngredients: [MenuIngredient]
  }

  type Mutation {
    createMenuIngredient(input: MenuIngredientInput!): MenuIngredient
    updateMenuIngredient(id: ID!, input: MenuIngredientInput!): MenuIngredient
    deleteMenuIngredient(id: ID!): Boolean
  }
`);

module.exports = schema;
