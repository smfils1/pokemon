import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { pokemonPager } from "../utils/pokemon";

const Pokemons = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [pokemons, setPokemons] = useState(null);

  const changePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    pokemonPager(25 * (page - 1), 25, setPokemons, setMaxPage);
  }, [page]);

  return (
    <div>
      <div>Pokemons</div>
      {maxPage > 0 ? (
        <>
          <pre>{JSON.stringify(pokemons, null, 2)}</pre>
          <Pagination
            count={maxPage}
            showFirstButton
            showLastButton
            page={page}
            onChange={changePage}
          />
        </>
      ) : (
        <div>There are no Pokemons</div>
      )}
    </div>
  );
};

export default Pokemons;
