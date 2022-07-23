import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import RubriqueTitle from "../../../../components/UI/RubriqueTitle/RubriqueTitle";

const telephone = [
  {
    name: "+212 XXX XXX XXX",
    link: "https://web.facebook.com/AsebemOfficiel",
    icon: <PhoneIcon />,
  },
  {
    name: "+212 XXX XXX XXX",
    link: "https://web.facebook.com/AsebemOfficiel",
    icon: <PhoneIcon />,
  },
];
export default function Telephone() {
  return (
    <Grid item>
      <RubriqueTitle>Téléphone</RubriqueTitle>
      <List dense>
        {telephone.map((reseau, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{reseau.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={reseau.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
