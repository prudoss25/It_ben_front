import React from "react";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import RubriqueTitle from "../../../../components/UI/RubriqueTitle/RubriqueTitle";


const reseauxList = [
  {
    name:"ASEBEM Nationale",
    link:"https://web.facebook.com/AsebemOfficiel",
    icon:<FacebookIcon/>
  },
  {
    name:"ASEBEM Nationale",
    link:"https://www.instagram.com/asebem_nationale/",
    icon:<InstagramIcon />
  }
]
export default function ReseauxSociaux() {
  

  return (
      <Grid  item >
          <RubriqueTitle>
            Reseaux Sociaux
          </RubriqueTitle>
          <List dense>
              {reseauxList.map((reseau, index) => 
                <ListItem
                key={index}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {reseau.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={reseau.name}
                  />
                </ListItem>
              )}
            </List>
      </Grid>
  );
}
