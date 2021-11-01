import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TypeList from "../components/TypeList";
import { getPokemon } from "../utils/pokemon";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  img: {
    width: "40%",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

const ScrollableBox = styled(Box)(({ theme }) => ({
  overflowY: "scroll",
  maxHeight: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    height: "100%",
    maxHeight: 600,
  },
}));

const ModalCard = ({ id, open, handleClose }) => {
  let [pokemon, setPokemon] = useState(null);
  let [error, setError] = useState(false);

  useEffect(() => {
    getPokemon(id, setPokemon, setError);
  }, [id]);

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    >
      <ScrollableBox sx={style}>
        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer", m: 2 }} />

        {!error && pokemon ? (
          <div className={classes.content}>
            <Typography variant="h5" gutterBottom component="div">
              {pokemon.name.toUpperCase()}
            </Typography>
            <img src={pokemon.sprite} className={classes.img} alt="sprite" />
            <TypeList types={pokemon.types} />
            {[{ name: "Weight", value: pokemon.weight }, ...pokemon.stats].map(
              ({ name, value }, index) => {
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    {name}: {value}
                  </Typography>
                );
              }
            )}
          </div>
        ) : (
          <div>Not available</div>
        )}
      </ScrollableBox>
    </Modal>
  );
};

export default ModalCard;
