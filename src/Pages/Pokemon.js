import React, { useState, useEffect } from "react";
import { getPokemon } from "../utils/pokemon";

const Pokemon = ({ match }) => {
  const { id } = match.params;
  let [pokemon, setPokemon] = useState({});
  let [error, setError] = useState(false);

  useEffect(() => {
    getPokemon(id, setPokemon, setError);
  }, [id]);

  return (
    <div>
      {!error ? (
        <pre>{JSON.stringify(pokemon, null, 2)}</pre>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default Pokemon;
