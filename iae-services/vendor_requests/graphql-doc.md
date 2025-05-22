# Vendor Requests Service - GraphQL API Documentation

## Types

### VendorRequest
- **id**: ID! - Unique identifier for the vendor request
- **vendor_id**: Int! - Associated vendor ID
- **ingredient_id**: Int! - Associated ingredient ID
- **quantity**: Int! - Quantity requested
- **status**: String! - Status of the request (requested, accepted, on-delivery, delivered)
- **requested_at**: String - Timestamp when the request was made
- **estimated_arrival**: String - Estimated arrival datetime

## Queries

- **getVendorRequest(id: ID!): VendorRequest**  
  Retrieve a vendor request by its ID.

- **getAllVendorRequests: [VendorRequest]**  
  Retrieve all vendor requests.

## Mutations

- **createVendorRequest(input: VendorRequestInput!): VendorRequest**  
  Create a new vendor request record.

- **updateVendorRequest(id: ID!, input: VendorRequestInput!): VendorRequest**  
  Update an existing vendor request record.

- **deleteVendorRequest(id: ID!): Boolean**  
  Delete a vendor request record by ID.

## Input Types

### VendorRequestInput
- **vendor_id**: Int!
- **ingredient_id**: Int!
- **quantity**: Int!
- **status**: String
- **requested_at**: String
- **estimated_arrival**: String
