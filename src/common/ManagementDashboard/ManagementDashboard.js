import { Card, CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Button from "../../components/UI/Button/Button";
import Loading from "../Loading/Loading";
import axios from "axios";
import ConfirmAlert from "../../components/UI/ConfirmAlert/ConfirmAlert";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
import Table from "../Table/Table";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { EventsManagementType, SponsorsManagementType, UsersManagementType } from "../../Constantes";
import { fetchEvents } from "../../features/Event/EventSlice";
import { fetchSponsors } from "../../features/Sponsor/SponsorSlice";
import { fetchUsers } from "../../features/User/UserSlice";

const ManagementDashboard = ({
  render,
  getDataListRoute,
  deleteDataRoute,
  idField,
  typeManagement,
}) => {
  const [loading, setLoading] = useState(false);
  const [openObjectForm, setOpenObjectForm] = useState(false);
  const [openConsultObject, setOpenConsultObject] = useState(false);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const [currentObject, setCurrentObject] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    edit: false,
    delete: false,
    onDelete: () => onConfirmDelete(null),
    onEdit: () => onConfirmEdit(null),
  });
  const getData = () => {
    setLoading(true);
    axios.get(getDataListRoute).then((response) => {
      if (response.status === 200) {
        const liste = [...response.data];
        setObjectList(liste);
        setCurrentObject(null);
        setLoading(false);
      }
    });
  };

  const setObjectList = (values) => {
    switch (typeManagement) {
      case UsersManagementType:
        dispatch(fetchUsers(values))
        break;
      case SponsorsManagementType:
        dispatch(fetchSponsors(values))
        break;
      case EventsManagementType:
        dispatch(fetchEvents(values))
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (openObjectForm === false) {
      setCurrentObject(null);
    }
  }, [openObjectForm]);

  useEffect(() => {
    if (openConsultObject === false) {
      setCurrentObject(null);
    }
  }, [openConsultObject]);

  /*Delete Object Management */
  const deleteObject = (object) => {
    setAlert({
      ...alert,
      open: true,
      message: `Etes vous sûr de réaliser cette Supression `,
      delete: true,
      onDelete: () => onConfirmDelete(object),
    });
  };
  const onConfirmDelete = (object) => {
    if (object) {
      axios
        .delete(`${deleteDataRoute}${object[idField]}`)
        .then((response) => {
          if (response.status === 200) {
            openNotification("success", `La ligne a été supprimée`);
          }
        })
        .catch(() => {
          openNotification("error", `Une erreur est survenue`);
        });
      onAlertClosed();
    }
  };

  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  };

  /*Edit Object Management */
  const editObject = (object) => {
    setCurrentObject(object);
    setOpenObjectForm(true);
  };
  const onConfirmEdit = () => {};

  const consultObject = (object) => {
    handleConsultObject(object);
  };

  /* Add Object */
  const handleAddObject = () => {
    setOpenObjectForm(true);
  };

  /* Consult Object Informations */
  const handleConsultObject = (object) => {
    setCurrentObject(object);
    setOpenConsultObject(true);
  };

  const onNotificationClosed = () => {
    getData();
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };
  const onAlertClosed = () => {
    setAlert({
      open: false,
      message: "",
      edit: false,
      delete: false,
      onDelete: () => onConfirmDelete(),
      onEdit: () => onConfirmEdit(),
    });
  };

  const values = useMemo(() => {
    if (openObjectForm) {
      if (currentObject === null)
        return {
          object: currentObject,
          consult: false,
          edit: false,
          add: true,
          refreshDataFunc: getData,
          setOpenObjectForm,
          setOpenConsultObject
        };
      else
        return {
          object: currentObject,
          consult: false,
          edit: true,
          add: false,
          refreshDataFunc: getData,
          setOpenObjectForm,
          setOpenConsultObject
        };
    } else if (openConsultObject) {
      return {
        object: currentObject,
        consult: true,
        edit: false,
        add: false,
        refreshDataFunc: getData,
        setOpenObjectForm,
        setOpenConsultObject
      };
    }
    return {
      object: currentObject,
      consult: false,
      edit: false,
      add: false,
      refreshDataFunc: getData,
      setOpenObjectForm,
      setOpenConsultObject
    };
  }, [currentObject, openObjectForm, openConsultObject]);

  return (
    <Aux>
      <Card>
        <CardContent>
          <Grid container justifyContent={"space-between"}>
            {render(values)}
            <Grid item>{loading && <Loading />}</Grid>
            <Grid item>
              <Button action={handleAddObject}> Ajouter </Button>
            </Grid>
          </Grid>
          <Table
            typeManagement={typeManagement}
            onConsult={consultObject}
            onDelete={deleteObject}
            onEdit={editObject}
          />
        </CardContent>
      </Card>
      <ConfirmAlert
        open={alert.open}
        message={alert.message}
        handleClose={onAlertClosed}
        handleConfirm={
          (alert.delete && alert.onDelete) ||
          (alert.edit && alert.onEdit) ||
          (() => {})
        }
      />
      <NoticationAlert handleClose={onNotificationClosed} {...notification} />
    </Aux>
  );
};

export default ManagementDashboard;
ManagementDashboard.propTypes = {
  render: PropTypes.func.isRequired,
  idField: PropTypes.string.isRequired,
  getDataListRoute: PropTypes.string.isRequired,
  deleteDataRoute: PropTypes.string.isRequired,
  typeManagement: PropTypes.string.isRequired,
};
