import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { client } from "../../graphql/ApolloClient";

import { GET_CLIENTS, ADD_CLIENT } from "../../graphql/Queries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [
    addClient,
    { loading: addingClient, error: errorAddClient, data: clientData },
  ] = useMutation(ADD_CLIENT);

  if (error) return <div className="error">Error!!</div>;
  if (loading) return <div className="in-progress">Loading!!</div>;

  const { clients } = data;

  const handleAddClient = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    addClient({
      variables: { name, phone },
    });

    await client.refetchQueries({
      include: "active",
    });
  };

  return (
    <div>
      <form className="form-add-user" onSubmit={handleAddClient}>
        Name: <input type="text" />
        Phone: <input type="text" />
        <button type="submit">Add client</button>
      </form>

      {clients.map(({ id, name, phone }) => (
        <div key={id}>
          {name} - {phone}
        </div>
      ))}
    </div>
  );
};

export default Clients;
