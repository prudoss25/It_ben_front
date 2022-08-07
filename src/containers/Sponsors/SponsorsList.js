import React,{ useEffect, useState } from "react";
import ManagementDashboard from "../../common/ManagementDashboard/ManagementDashboard";
import { SponsorsManagementType } from "../../Constantes";
import { DELETE_SPONSOR, FIND_ALL_SPONSORS } from "../../Routes";
import Aux from "../../hoc/_Aux/_Aux";
import { Grid, Typography } from "@material-ui/core";
import SponsorForm from "./SponsorForm/SponsorForm";
import ConsultSponsor from "./ConsultSponsor/ConsultSponsor";

const SponsorsList = () => {
    const [openSponsorForm,setOpenSponsorForm] = useState(false)
 
    return (
      <ManagementDashboard
        deleteDataRoute={`${DELETE_SPONSOR}`}
        getDataListRoute={`${FIND_ALL_SPONSORS}`}
        idField="idSponsor"
        typeManagement={`${SponsorsManagementType}`}
        render={({object, consult, edit, add, refreshDataFunc,setOpenObjectForm,setOpenConsultObject}) => {
          const [openConsult,setOpenConsult] = useState(false)
          useEffect(() => {
            setOpenSponsorForm(edit||add)
          },[edit, add])
          useEffect(() => {
            setOpenConsult(consult)
          },[consult])
          return (
            <Aux>
              <Grid item>
                <Typography gutterBottom variant="h4" component="div">
                  Liste des Sponsors
                </Typography>
              </Grid>
              
                <SponsorForm
                  visible={openSponsorForm}
                  open={openSponsorForm}
                  handleToggle={() => setOpenObjectForm(false)}
                  sponsor={object}
                  refreshDataFunc={() => refreshDataFunc()}
                />
              
              {openConsult && (
                <ConsultSponsor
                  sponsor={object}
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
  
  export default SponsorsList;
  