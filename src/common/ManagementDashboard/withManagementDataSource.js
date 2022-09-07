import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  UsersManagementType,
  EventsManagementType,
  ROLES,
  SponsorsManagementType,
} from "../../Constantes";

const withManagementDataSource = (Component) => (props) => {

  const users = useSelector((state) => state.user.all)
  const sponsors = useSelector((state) => state.sponsor.all)
  const events = useSelector((state) => state.event.all)

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

    console.log("MANAGEMENT_VALUES",userListCalculated,eventListCalculated,sponsorListCalculated)
    switch (props.typeManagement) {
      case UsersManagementType:
        return getItems(userListCalculated,UsersManagementType);
      case EventsManagementType:
        return getItems(eventListCalculated,EventsManagementType);
      case SponsorsManagementType:
          return getItems(sponsorListCalculated,SponsorsManagementType);
      default:
        return {};
    }
  }, [userListCalculated,eventListCalculated,sponsorListCalculated, props.typeManagement]);

  return <Component {...props} {...items} />;
};

export default withManagementDataSource;
