# Order Menu Service - GraphQL API Documentation

## Types

### OrderMenu
- **id**: ID! - Unique identifier for the order menu record
- **order_id**: Int! - Associated order ID
- **menu_id**: Int! - Associated menu ID
- **quantity**: Int! - Quantity of the menu item ordered

## Queries

- **getOrderMenu(id: ID!): OrderMenu**  
  Retrieve an order menu record by its ID.

- **getAllOrderMenus: [OrderMenu]**  
  Retrieve all order menu records.

## Mutations

- **createOrderMenu(input: OrderMenuInput!): OrderMenu**  
  Create a new order menu record.

- **updateOrderMenu(id: ID!, input: OrderMenuInput!): OrderMenu**  
  Update an existing order menu record.

- **deleteOrderMenu(id: ID!): Boolean**  
  Delete an order menu record by ID.

## Input Types

### OrderMenuInput
- **order_id**: Int!
- **menu_id**: Int!
- **quantity**: Int!
