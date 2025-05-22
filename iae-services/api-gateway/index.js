const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema, graphql } = require('graphql');
const fetch = require('node-fetch');

const app = express();
const PORT = 4000;

// Example: Unified schema with simple query delegation to microservices
const schema = buildSchema(`
  type Query {
    deliveries: [Delivery]
    ingredients: [Ingredient]
    memberships: [Membership]
    menuIngredients: [MenuIngredient]
    orderMenus: [OrderMenu]
    vendors: [Vendor]
    vendorRequests: [VendorRequest]
  }

  type Delivery {
    id: ID
    order_id: Int
    delivery_status: String
    delivery_time: String
    current_location: String
  }

  type Ingredient {
    id: ID
    name: String
    unit: String
  }

  type Membership {
    id: ID
    user_id: Int
    points: Int
  }

  type MenuIngredient {
    id: ID
    menu_id: Int
    ingredient_id: Int
    quantity: Float
  }

  type OrderMenu {
    id: ID
    order_id: Int
    menu_id: Int
    quantity: Int
  }

  type Vendor {
    id: ID
    name: String
    contact: String
  }

  type VendorRequest {
    id: ID
    vendor_id: Int
    ingredient_id: Int
    quantity: Int
    status: String
    requested_at: String
    estimated_arrival: String
  }
`);

async function delegateQuery(serviceUrl, query) {
  const response = await fetch(serviceUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const json = await response.json();
  return json.data;
}

const root = {
  deliveries: async () => {
    const query = `{ deliveries { id order_id delivery_status delivery_time current_location } }`;
    const data = await delegateQuery('http://localhost:4001/graphql', query);
    return data.deliveries;
  },
  ingredients: async () => {
    const query = `{ getAllIngredients { id name unit } }`;
    const data = await delegateQuery('http://localhost:4002/graphql', query);
    return data.getAllIngredients;
  },
  memberships: async () => {
    const query = `{ getAllMemberships { id user_id points } }`;
    const data = await delegateQuery('http://localhost:4003/graphql', query);
    return data.getAllMemberships;
  },
  menuIngredients: async () => {
    const query = `{ getAllMenuIngredients { id menu_id ingredient_id quantity } }`;
    const data = await delegateQuery('http://localhost:4004/graphql', query);
    return data.getAllMenuIngredients;
  },
  orderMenus: async () => {
    const query = `{ getAllOrderMenus { id order_id menu_id quantity } }`;
    const data = await delegateQuery('http://localhost:4005/graphql', query);
    return data.getAllOrderMenus;
  },
  vendors: async () => {
    const query = `{ getAllVendors { id name contact } }`;
    const data = await delegateQuery('http://localhost:4006/graphql', query);
    return data.getAllVendors;
  },
  vendorRequests: async () => {
    const query = `{ getAllVendorRequests { id vendor_id ingredient_id quantity status requested_at estimated_arrival } }`;
    const data = await delegateQuery('http://localhost:4007/graphql', query);
    return data.getAllVendorRequests;
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
