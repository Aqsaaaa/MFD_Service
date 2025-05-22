const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type OrderMenu {
    id: ID!
    order_id: Int!
    menu_id: Int!
    quantity: Int!
  }

  input OrderMenuInput {
    order_id: Int!
    menu_id: Int!
    quantity: Int!
  }

  type Query {
    getOrderMenu(id: ID!): OrderMenu
    getAllOrderMenus: [OrderMenu]
  }

  type Mutation {
    createOrderMenu(input: OrderMenuInput!): OrderMenu
    updateOrderMenu(id: ID!, input: OrderMenuInput!): OrderMenu
    deleteOrderMenu(id: ID!): Boolean
  }
`);

module.exports = schema;
