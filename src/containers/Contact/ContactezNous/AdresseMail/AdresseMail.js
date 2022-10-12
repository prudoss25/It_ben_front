import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import RubriqueTitle from "../../../../components/UI/RubriqueTitle/RubriqueTitle";

const mails = [
  {
    name: "Conseil Consultatif",
    link: "cc.asebem.officiel@gmail.com",
    icon: <MailIcon />,
  },
  {
    name: "Bureau Exécutif",
    link: "asebem.official@gmail.com",
    icon: <MailIcon />,
  },
];

export default function AdresseMail() {
  return (
    <Grid item>
      <RubriqueTitle>Adresses mails</RubriqueTitle>
      <List component="nav">
        {mails.map((reseau, index) => (
          <ListItem
            button
            component="a"
            href={`mailto:${reseau.link}`}
            key={index}
          >
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
