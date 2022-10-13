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
    name: "+212 680-491051",
    link: "+212 680-491051",
    icon: <PhoneIcon />,
  },
  {
    name: "+212 630-796061",
    link: "+212 630-796061",
    icon: <PhoneIcon />,
  },
];
export default function Telephone() {
  return (
    <Grid item>
      <RubriqueTitle>Téléphone</RubriqueTitle>
      <List dense>
        {telephone.map((reseau, index) => (
          <ListItem button component="a" href={`tel:${reseau.link}`} key={index}>
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
