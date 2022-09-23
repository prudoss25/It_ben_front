import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";


const ActualiteVide = (props) => {
  const {text} = props
    return(
        <Card
        style={{
          width: "100%",
          minHeight: "80%",
          maxHeight: "80%",
          margin: 20,
        }}
      >
       
        <CardContent>
          { (
            <Typography variant="body2" color="text.secondary" style={{ fontSize: 13, textAlign: "center" }}
            component="p"
          >
            {text}
            </Typography>
          )}
        </CardContent>
      </Card>
    )
}

export default ActualiteVide;