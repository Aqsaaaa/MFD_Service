# Ingredients Service - GraphQL API Documentation

## Mutations

- createIngredient(input: IngredientInput!): Ingredient  
  Create a new ingredient record.  
  Example mutation:
  ```
  mutation {
    createIngredient(input: {
      name: "Tomato",
      unit: "kg"
    }) {
      id
      name
      unit
    }
  }
  ```

- updateIngredient(id: ID!, input: IngredientInput!): Ingredient  
  Update an existing ingredient record.  
  Example mutation:
  ```
  mutation {
    updateIngredient(id: 1, input: {
      name: "Cherry Tomato",
      unit: "kg"
    }) {
      id
      name
      unit
    }
  }
  ```

- deleteIngredient(id: ID!): Boolean  
  Delete an ingredient record by ID.  
  Example mutation:
  ```
  mutation {
    deleteIngredient(id: 1)
  }
  ```

## Input Types

IngredientInput:
- name: String!
- unit: String!
