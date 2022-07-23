import React from "react";
import { Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import RubriqueTitle from "../../../../components/UI/RubriqueTitle/RubriqueTitle";

const mails = [
  {
    name:"Conseil Consultatif",
    link:"https://web.facebook.com/AsebemOfficiel",
    icon:<MailIcon/>
  },
  {
    name:"Bureau Exécutif",
    link:"https://www.instagram.com/asebem_nationale/",
    icon:<MailIcon />
  }
]
export default function AdresseMail() {
  return (
    <Grid item>
      <RubriqueTitle>
        {/* <MailIcon fontSize="medium" style={{marginRight:8}} /> */}
        Adresses mails
      </RubriqueTitle>
      <List dense>
        {mails.map((reseau, index) => (
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
