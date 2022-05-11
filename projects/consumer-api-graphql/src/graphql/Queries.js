import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CLIENTS = gql`
  query {
    clients {
      id
      name
      phone
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation AddClient($name: String, $phone: String) {
    addClient(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;
