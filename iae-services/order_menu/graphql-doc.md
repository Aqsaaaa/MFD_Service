# Order Menu Service - GraphQL API Documentation

## Mutations

- createOrderMenu(input: OrderMenuInput!): OrderMenu  
  Create a new order menu record.  
  Example mutation:
  ```
  mutation {
    createOrderMenu(input: {
      order_id: 1,
      menu_id: 2,
      quantity: 1
    }) {
      id
      order_id
      menu_id
      quantity
    }
  }
  ```

- updateOrderMenu(id: ID!, input: OrderMenuInput!): OrderMenu  
  Update an existing order menu record.  
  Example mutation:
  ```
  mutation {
    updateOrderMenu(id: 1, input: {
      quantity: 2
    }) {
      id
      quantity
    }
  }
  ```

- deleteOrderMenu(id: ID!): Boolean  
  Delete an order menu record by ID.  
  Example mutation:
  ```
  mutation {
    deleteOrderMenu(id: 1)
  }
  ```

## Input Types

OrderMenuInput:
- order_id: Int!
- menu_id: Int!
- quantity: Int!
