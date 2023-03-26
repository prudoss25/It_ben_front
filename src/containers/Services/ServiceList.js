import { Grid,  Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ManagementDashboard from "../../common/ManagementDashboard/ManagementDashboard";
import { ServicesManagementType } from "../../Constantes";
import AddServiceForm from "./AddService/AddServiceForm";
import ConsultService from "./ConsultService/ConsultService";
import Aux from "../../hoc/_Aux/_Aux";
import { FIND_ALL_SERVICES, DELETE_SERVICE } from "../../Routes";


const ServicesList = () => {
  const [openServiceForm,setOpenServiceForm] = useState(false)
  return (
    <ManagementDashboard
      deleteDataRoute={`${DELETE_SERVICE}`}
      getDataListRoute={`${FIND_ALL_SERVICES}`}
      idField="idService"
      typeManagement={`${ServicesManagementType}`}
      render={({object, consult, edit, add, refreshDataFunc,setOpenObjectForm,setOpenConsultObject}) => {
        const [openConsult,setOpenConsult] = useState(false)
        useEffect(() => {
          setOpenServiceForm(edit||add)
        },[edit, add])
        useEffect(() => {
          setOpenConsult(consult)
        },[consult])
        return (
          <Aux>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Liste des Services
              </Typography>
            </Grid>
           
      
              <AddServiceForm
                visible={openServiceForm}
                open={openServiceForm}
                handleToggle={() => setOpenObjectForm(false)}
                service={object}
                refreshDataFunc={() => refreshDataFunc()}
              />
            
            {openConsult && (
              <ConsultService
                service={object}
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

export default ServicesList;