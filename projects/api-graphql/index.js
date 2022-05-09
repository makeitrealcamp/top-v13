const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Schema
const schema = buildSchema(`
  type Client {
    id: Int
    name: String
    phone: String
  }

  type Query {
    clients: [Client]
    client(id: Int): Client
  }

  type Mutation {
    addClient(name: String, phone: String) : Client
  }
`);

// Data
const clients = [];
let counterId = 1;

// Root
const root = {
  clients: () => clients,
  client: async ({ id }) => {
    const client = await clients.find((item) => item.id === id);
    return client;
  },
  addClient: ({ name, phone }) => {
    const newClient = { id: counterId, name, phone };
    clients.push(newClient);
    counterId++;
    return newClient;
  },
};

// Server
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
