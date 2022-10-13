import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";



const ConsultInfo = (props) => {
  
    return (
      <Dialog
        open={props.open}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        onClose={() => props.handleToggle}
      >
        <DialogTitle>{props.title}</DialogTitle>
  
        <DialogContent divider>
          {props.content}
        </DialogContent>
  
        <DialogActions>
          <Button color="primary" onClick={props.handleToggle}>
            {" "}
            Fermer{" "}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConsultInfo;
  
  ConsultInfo.propTypes = {
    title:PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    handleToggle:PropTypes.func.isRequired
  };