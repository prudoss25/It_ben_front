import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  styled,
  CardHeader,
  Chip,
} from "@material-ui/core";

const ServiceCardStyled = styled(Card)(({ theme }) => ({
  minHeight: 350,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

const ServiceCards = ({ service }) => {
  const { idService, title, description, category, imageUrl, vendorID } =
    service;

  return (
    <ServiceCardStyled>
      <CardHeader
        action={
          <div>
            <Chip label={category} size="small" sx={{ fontSize: 10 }} />
          </div>
        }
        title={
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        }
        subheader={vendorID}
      />

      <CardMedia
        component="img"
        alt={title}
        height="150"
        image={imageUrl}
        title={title}
      />
      <CardContent style={{ minHeight: 64, maxHeight: 64 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/service/${idService}`}>
          <Button size="small" color="primary">
            Voir Plus
          </Button>
        </Link>
      </CardActions>
    </ServiceCardStyled>
  );
};

export default ServiceCards;
