import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getPokemon } from "../utils/pokemon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCard = ({ id, open, handleClose }) => {
  let [pokemon, setPokemon] = useState(null);
  let [error, setError] = useState(false);

  useEffect(() => {
    getPokemon(id, setPokemon, setError);
  }, [id]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {!error ? (
          <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        ) : (
          <div>No available</div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalCard;
