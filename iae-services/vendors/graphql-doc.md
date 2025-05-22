# Vendors Service - GraphQL API Documentation

## Types

### Vendor
- **id**: ID! - Unique identifier for the vendor
- **name**: String! - Name of the vendor
- **contact**: String - Contact information for the vendor

## Queries

- **getVendor(id: ID!): Vendor**  
  Retrieve a vendor by its ID.

- **getAllVendors: [Vendor]**  
  Retrieve all vendors.

## Mutations

- **createVendor(input: VendorInput!): Vendor**  
  Create a new vendor record.

- **updateVendor(id: ID!, input: VendorInput!): Vendor**  
  Update an existing vendor record.

- **deleteVendor(id: ID!): Boolean**  
  Delete a vendor record by ID.

## Input Types

### VendorInput
- **name**: String!
- **contact**: String
