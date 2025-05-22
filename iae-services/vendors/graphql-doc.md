# Vendors Service - GraphQL API Documentation

## Mutations

- createVendor(input: VendorInput!): Vendor  
  Create a new vendor record.  
  Example mutation:
  ```
  mutation {
    createVendor(input: {
      name: "Vendor A",
      contact: "contact@vendora.com"
    }) {
      id
      name
      contact
    }
  }
  ```

- updateVendor(id: ID!, input: VendorInput!): Vendor  
  Update an existing vendor record.  
  Example mutation:
  ```
  mutation {
    updateVendor(id: 1, input: {
      contact: "newcontact@vendora.com"
    }) {
      id
      contact
    }
  }
  ```

- deleteVendor(id: ID!): Boolean  
  Delete a vendor record by ID.  
  Example mutation:
  ```
  mutation {
    deleteVendor(id: 1)
  }
  ```

## Input Types

VendorInput:
- name: String!
- contact: String
