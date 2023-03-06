import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  ServicesManagementType,
  UsersManagementType,
  EventsManagementType,
  ROLES,
  SponsorsManagementType,
} from "../../Constantes";

const withManagementDataSource = (Component) => (props) => {

  const users = useSelector((state) => state.user.all)
  const sponsors = useSelector((state) => state.sponsor.all)
  const events = useSelector((state) => state.event.all)
  const services = useSelector((state) => state.user.all)

  const serviceListCalculated = useMemo(() => {
    return services ? [...services].map((service) => ({
      ...service,
      registrationDate:
        service.registrationDate && new Date(service.registrationDate),
    })) : [];
  },[services])

  const userListCalculated = useMemo(() => {
    return users ? [...users].map((user) => ({
      ...user,
      roleLabel: ROLES[user.role] || "",
      registrationDate:
        user.registrationDate && new Date(user.registrationDate),
      birthDate: user.birthDate && new Date(user.birthDate)
    })) : [];
  },[users])

  const eventListCalculated = useMemo(() => {
    return events ? [...events].map((event) => ({
      ...event,
      startDate: event.startDate,
      endDate: event.endDate,
  })) : [];
  },[events])

  const sponsorListCalculated = useMemo(() => {
    return events ? [...sponsors] : [];
  },[sponsors])

  const managementDashbordInfos = {
    Services: {
      fieldNames: [
        "title",
        "description",
        "registrationDate",
        "category",
        "vendorID",
      ],
      headerTitles: ["titre", "Description", "date d'ajout", "categorie", "Id vendeur"],
    },
    Users: {
      fieldNames: [
        "lastName",
        "firstName",
        "registrationNumber",
        "city",
        "roleLabel",
      ],
      headerTitles: ["Nom", "Prénom", "Matricule", "Ville", "Role"],
    },
    Events : {
        fieldNames:[
            "title",
            "theme",
            "startDate",
            "endDate"
        ],
        headerTitles: [
            "Titre",
            "Thème",
            "Date Début",
            "Date Fin"
        ]
    },
    Sponsors : {
        fieldNames:[
            "name",
            "description"
        ],
        headerTitles: [
            "Nom",
            "Description"
        ]
    }
  };

  const getItems = (elements,type) =>{
    return {
        action:true,
        elements: elements,
        ...managementDashbordInfos[type]
    }
  }

  const items = useMemo(() => {

    console.log("MANAGEMENT_VALUES",userListCalculated,eventListCalculated,sponsorListCalculated, serviceListCalculated)
    switch (props.typeManagement) {
      case ServicesManagementType:
        return getItems(serviceListCalculated,ServicesManagementType);
      case UsersManagementType:
        return getItems(userListCalculated,UsersManagementType);
      case EventsManagementType:
        return getItems(eventListCalculated,EventsManagementType);
      case SponsorsManagementType:
          return getItems(sponsorListCalculated,SponsorsManagementType);
      default:
        return {};
    }
  }, [serviceListCalculated,userListCalculated,eventListCalculated,sponsorListCalculated, props.typeManagement]);

  return <Component {...props} {...items} />;
};

export default withManagementDataSource;
