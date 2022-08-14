import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ImageList, ImageListItem } from "@material-ui/core";
import React from "react";

const ConsultSponsor = (props) => {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);
  return (
    <Dialog
      open={props.open}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      onClose={() => props.handleToggle}
    >
      <DialogTitle>{props.sponsor.name}</DialogTitle>

      <DialogContent divider>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <p>
            <strong>Description : </strong>
            {props.sponsor.description}
          </p>
          <p>
            <strong>Site : </strong>
            <a href={props.sponsor.site} target="_blank" >{props.sponsor.name}</a>
          </p>
        </DialogContentText>
        <ImageList rowHeight={375} cols={3}>
          {props.sponsor.logo && [props.sponsor.logo].map((picture, index) => (
            <ImageListItem key={index} cols={3}>
              <img style={{objectFit:"scale-down"}} src={picture} alt={index} />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={props.handleToggle}>
          {" "}
          Ok{" "}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsultSponsor;
