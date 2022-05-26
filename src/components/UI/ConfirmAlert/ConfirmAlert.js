import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const confirmAlert = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.message}</DialogTitle>
      <DialogActions>
        <Button onClick={props.handleClose}>Annuler</Button>
        <Button onClick={props.handleConfirm} autoFocus>
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default confirmAlert;

confirmAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  message:PropTypes.string.isRequired
};
