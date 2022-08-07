import React from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


const noticationAlert = (props) => {
  return (
    <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleClose}>
      <Alert severity={props.type} sx={{ width: "100%" }} onClose={props.handleClose}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default noticationAlert;

noticationAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};
