# Menu Ingredients Service - GraphQL API Documentation

## Types

### MenuIngredient
- **id**: ID! - Unique identifier for the menu ingredient
- **menu_id**: Int! - Associated menu ID
- **ingredient_id**: Int! - Associated ingredient ID
- **quantity**: Float! - Quantity of the ingredient used

## Queries

- **getMenuIngredient(id: ID!): MenuIngredient**  
  Retrieve a menu ingredient by its ID.

- **getAllMenuIngredients: [MenuIngredient]**  
  Retrieve all menu ingredients.

## Mutations

- **createMenuIngredient(input: MenuIngredientInput!): MenuIngredient**  
  Create a new menu ingredient record.

- **updateMenuIngredient(id: ID!, input: MenuIngredientInput!): MenuIngredient**  
  Update an existing menu ingredient record.

- **deleteMenuIngredient(id: ID!): Boolean**  
  Delete a menu ingredient record by ID.

## Input Types

### MenuIngredientInput
- **menu_id**: Int!
- **ingredient_id**: Int!
- **quantity**: Float!
