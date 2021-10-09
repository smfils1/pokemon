import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { pokemonPager } from "../utils/pokemon";
import NameButton from "../components/NameButton";
import PokemonList from "../components/PokemonList";
import ModalCard from "../components/ModalCard";
import { makeStyles } from "@mui/styles";

import backgroundImage from "../assets/bg.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  list: {
    marginTop: 100,
  },
});

const Pokemons = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [activePokemon, setActivePokemon] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (name) => {
    setActivePokemon(name);
    setOpen(true);
  };
  const handleClose = () => {
    setActivePokemon("");
    setOpen(false);
  };

  const classes = useStyles();

  const changePage = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    pokemonPager(25 * (page - 1), 25, setPokemons, setMaxPage);
  }, [page]);

  return (
    <div className={classes.root}>
      {maxPage > 0 ? (
        <>
          <PokemonList className={classes.list}>
            {pokemons.map(({ name }) => (
              <NameButton
                name={name}
                key={name}
                handleOpen={() => handleOpen(name)}
              />
            ))}
          </PokemonList>

          <Pagination
            className={classes.footer}
            sx={{
              p: 2,
              m: 3,
              bgcolor: "white",
            }}
            variant="outlined"
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
      {activePokemon && (
        <ModalCard handleClose={handleClose} id={activePokemon} open={open} />
      )}
    </div>
  );
};

export default Pokemons;