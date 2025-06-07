# Memberships Service - GraphQL API Documentation

## Mutations

- createMembership(input: MembershipInput!): Membership  
  Create a new membership record.  
  Example mutation:
  ```
  mutation {
    createMembership(input: {
      user_id: 1,
      points: 100
    }) {
      id
      user_id
      points
    }
  }
  ```

- updateMembership(id: ID!, input: MembershipInput!): Membership  
  Update an existing membership record.  
  Example mutation:
  ```
  mutation {
    updateMembership(id: 1, input: {
      points: 150
    }) {
      id
      points
    }
  }
  ```

- deleteMembership(id: ID!): Boolean  
  Delete a membership record by ID.  
  Example mutation:
  ```
  mutation {
    deleteMembership(id: 1)
  }
  ```

## Input Types

MembershipInput:
- user_id: Int!
- points: Int
