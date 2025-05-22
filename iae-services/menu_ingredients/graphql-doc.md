# Menu Ingredients Service - GraphQL API Documentation

## Mutations

- createMenuIngredient(input: MenuIngredientInput!): MenuIngredient  
  Create a new menu ingredient record.  
  Example mutation:
  ```
  mutation {
    createMenuIngredient(input: {
      menu_id: 1,
      ingredient_id: 2,
      quantity: 3.5
    }) {
      id
      menu_id
      ingredient_id
      quantity
    }
  }
  ```

- updateMenuIngredient(id: ID!, input: MenuIngredientInput!): MenuIngredient  
  Update an existing menu ingredient record.  
  Example mutation:
  ```
  mutation {
    updateMenuIngredient(id: 1, input: {
      quantity: 4.0
    }) {
      id
      quantity
    }
  }
  ```

- deleteMenuIngredient(id: ID!): Boolean  
  Delete a menu ingredient record by ID.  
  Example mutation:
  ```
  mutation {
    deleteMenuIngredient(id: 1)
  }
  ```

## Input Types

MenuIngredientInput:
- menu_id: Int!
- ingredient_id: Int!
- quantity: Float!
