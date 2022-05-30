
import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

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
        <Button color="secondary" onClick={props.handleClose}>Annuler</Button>
        <Button color="primary" onClick={props.handleConfirm} autoFocus>
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
