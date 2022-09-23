import React, { useEffect, useState } from "react";
import ManagementDashboard from "../../common/ManagementDashboard/ManagementDashboard";
import { EventsManagementType } from "../../Constantes";
import { DELETE_EVENT, FIND_ALL_EVENTS_DESC, FIND_ALL_SPONSORS } from "../../Routes";
import Aux from "../../hoc/_Aux/_Aux";
import { Grid, Typography } from "@material-ui/core";
import EventForm from "./EventForm/EventForm";
import ConsultEvent from "./ConsultEvent/ConsultEvent";
import axios from "axios";

const EventsList = () => {
  const [openEventForm, setOpenEventForm] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    axios.get(FIND_ALL_SPONSORS).then((response) => {
      if (response.status === 200) {
        setSponsors(response.data);
      }
    });
  }, []);
  return (
    <ManagementDashboard
      deleteDataRoute={`${DELETE_EVENT}`}
      getDataListRoute={`${FIND_ALL_EVENTS_DESC}`}
      idField="idEvent"
      typeManagement={`${EventsManagementType}`}
      render={({
        object,
        consult,
        edit,
        add,
        refreshDataFunc,
        setOpenObjectForm,
        setOpenConsultObject,
      }) => {
        const [openConsult, setOpenConsult] = useState(false);
        useEffect(() => {
          setOpenEventForm(edit || add);
        }, [edit, add]);
        useEffect(() => {
          setOpenConsult(consult);
        }, [consult]);
        return (
          <Aux>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Liste des Evènements
              </Typography>
            </Grid>
  
              <EventForm
              sponsors={sponsors}
              visible={openEventForm}
              open={openEventForm}
              handleToggle={() => setOpenObjectForm(false)}
              event={object}
              refreshDataFunc={() => refreshDataFunc()}
            />
            {openConsult && (
              <ConsultEvent
                sponsors={sponsors}
                event={object}
                open={consult}
                handleToggle={() => setOpenConsultObject(false)}
              />
            )}
          </Aux>
        );
      }}
    />
  );
};
export default EventsList;
