import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { pokemonPager } from "../utils/pokemon";
import NameButton from "../components/NameButton";
import PokemonList from "../components/PokemonList";
import ModalCard from "../components/ModalCard";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams, useHistory } from "react-router-dom";

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
  const { page: initialPage } = useParams();

  const [page, setPage] = useState(initialPage || 1);
  const [maxPage, setMaxPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePokemon, setActivePokemon] = useState("");
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const history = useHistory();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

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
    history.push(`/${value}`);
  };

  useEffect(() => {
    pokemonPager({
      offset: 25 * (page - 1),
      limit: 25,
      setData: setPokemons,
      setPages: setMaxPage,
      setLoading,
    });
  }, [page]);

  return (
    <div className={classes.root}>
      {maxPage > 0 && !loading ? (
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
            sx={{
              p: 1,
              m: 3,
              bgcolor: "white",
            }}
            variant="outlined"
            count={maxPage}
            page={parseInt(page, 10)}
            onChange={changePage}
            size={isSmall ? "small" : "medium"}
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
