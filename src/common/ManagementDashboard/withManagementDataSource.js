import React, { useMemo } from "react";
import {
  UsersManagementType,
  EventsManagementType,
  ROLES,
  SponsorsManagementType,
} from "../../Constantes";

const withManagementDataSource = (Component) => (props) => {
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
    let elements;
    switch (props.typeManagement) {
      case UsersManagementType:
        elements = [...props.elements].map((user) => ({
          ...user,
          roleLabel: ROLES[user.role] || "",
          registrationDate:
            user.registrationDate && new Date(user.registrationDate),
          birthDate: user.birthDate && new Date(user.birthDate),
        }));
        return getItems(elements,UsersManagementType);
      case EventsManagementType:
        elements = [...props.elements].map((event) => ({
            ...event,
            startDate: event.startDate,
            endDate: event.endDate,
        }));
        return getItems(elements,EventsManagementType);
        case SponsorsManagementType:
            return getItems([...props.elements],SponsorsManagementType);
      default:
        return {};
    }
  }, [props.elements, props.typeManagement]);

  return <Component {...props} {...items} />;
};

export default withManagementDataSource;
