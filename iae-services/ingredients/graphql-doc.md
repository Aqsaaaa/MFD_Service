# Ingredients Service - GraphQL API Documentation

## Types

### Ingredient
- **id**: ID! - Unique identifier for the ingredient
- **name**: String! - Name of the ingredient
- **unit**: String! - Unit of measurement for the ingredient

## Queries

- **getIngredient(id: ID!): Ingredient**  
  Retrieve an ingredient by its ID.

- **getAllIngredients: [Ingredient]**  
  Retrieve all ingredients.

## Mutations

- **createIngredient(input: IngredientInput!): Ingredient**  
  Create a new ingredient record.

- **updateIngredient(id: ID!, input: IngredientInput!): Ingredient**  
  Update an existing ingredient record.

- **deleteIngredient(id: ID!): Boolean**  
  Delete an ingredient record by ID.

## Input Types

### IngredientInput
- **name**: String!
- **unit**: String!
