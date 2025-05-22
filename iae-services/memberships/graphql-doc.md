# Memberships Service - GraphQL API Documentation

## Types

### Membership
- **id**: ID! - Unique identifier for the membership
- **user_id**: Int! - Associated user ID
- **points**: Int - Membership points

## Queries

- **getMembership(id: ID!): Membership**  
  Retrieve a membership by its ID.

- **getAllMemberships: [Membership]**  
  Retrieve all memberships.

## Mutations

- **createMembership(input: MembershipInput!): Membership**  
  Create a new membership record.

- **updateMembership(id: ID!, input: MembershipInput!): Membership**  
  Update an existing membership record.

- **deleteMembership(id: ID!): Boolean**  
  Delete a membership record by ID.

## Input Types

### MembershipInput
- **user_id**: Int!
- **points**: Int
