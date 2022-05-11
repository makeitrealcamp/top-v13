import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../graphql/Queries";

import "./style.css";

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (error) return <div className="error">Error!!</div>;
  if (loading) return <div className="in-progress">Loading!!</div>;

  const { characters } = data;
  const { results } = characters;

  return (
    <div>
      {results.map(({ id, name, image }) => (
        <div key={id} className="character">
          <h3>{name}</h3>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Characters;
