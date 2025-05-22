# Deliveries Service - GraphQL API Documentation

## Types

### Delivery
- **id**: ID! - Unique identifier for the delivery
- **order_id**: Int! - Associated order ID
- **delivery_status**: String! - Status of the delivery (assigned, on the way, delivered)
- **delivery_time**: String - DateTime when the delivery was made
- **current_location**: String - Current location of the delivery

## Queries

- **getDelivery(id: ID!): Delivery**  
  Retrieve a delivery by its ID.

- **getAllDeliveries: [Delivery]**  
  Retrieve all deliveries.

## Mutations

- **createDelivery(input: DeliveryInput!): Delivery**  
  Create a new delivery record.

- **updateDelivery(id: ID!, input: DeliveryInput!): Delivery**  
  Update an existing delivery record.

- **deleteDelivery(id: ID!): Boolean**  
  Delete a delivery record by ID.

## Input Types

### DeliveryInput
- **order_id**: Int!
- **delivery_status**: String
- **delivery_time**: String
- **current_location**: String
