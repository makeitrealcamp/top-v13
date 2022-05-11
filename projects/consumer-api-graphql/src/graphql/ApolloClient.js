import { ApolloClient, InMemoryCache } from "@apollo/client";

//const API_URL = "https://rickandmortyapi.com/graphql"

//local
const API_URL = "http://localhost:4000/graphql";

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
