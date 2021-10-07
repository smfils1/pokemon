import React from "react";

const Pokemon = ({ match }) => {
  const { id } = match.params;

  return <div>Pokemon {id}</div>;
};

export default Pokemon;
