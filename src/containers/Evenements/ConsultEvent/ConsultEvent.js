import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "moment/locale/fr";
import moment from "moment";
import classes from "./ConsultEvent.css";

const ConsultEvent = (props) => {
  const [event, setEvent] = useState({});
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);
  useEffect(() => {
    setEvent({
      ...props.event,
      sponsors:
        (props.event.sponsors && props.sponsors &&
          [...props.event.sponsors].map((idSponsor) => {
            return [...props.sponsors].find(
              (sponsor) => parseInt(idSponsor, 10) === sponsor.idSponsor
            );
          })) ||
        [],
    });
  }, [props.event]);
  return (
    <Dialog
      open={props.open}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      onClose={() => props.handleToggle}
    >
      <DialogTitle>{event.title}</DialogTitle>

      <DialogContent divider>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <p>
            <strong>Thème : </strong>
            {event.theme}
          </p>
          <p>
            <strong>Description : </strong>
            {event.description}
          </p>
          <p>
            <strong>Date de Début : </strong>
            {event.startDate && moment(props.event.startDate).format("ll")}
          </p>
          <p>
            <strong>Date de Fin : </strong>
            {event.endDate && moment(props.event.endDate).format("ll")}
          </p>
          {event.sponsors && event.sponsors && (
            <p>
              <strong>Sponsors : </strong>
              <section className={classes.Sponsor}>
                {[...event.sponsors].map((sponsor, index) => (
                  <p key={index}>
                    <img src={sponsor.logo} alt={sponsor.name} />
                    <span>{sponsor.name}</span>
                  </p>
                ))}
              </section>
            </p>
          )}
        </DialogContentText>
        <ImageList rowHeight={450} cols={6}>
          {props.event.pictures &&
            props.event.pictures.map((picture, index) => (
              <ImageListItem key={index} cols={3}>
                <img src={picture} alt={index} />
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

export default ConsultEvent;
