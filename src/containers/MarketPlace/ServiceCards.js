import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, styled } from '@material-ui/core';

const ServiceCardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 350,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
}));

const ServiceCards = ({ service }) => {
  const { name, category, dateAdded, image, title, description, id } = service;

  return (
    <ServiceCardStyled>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {name} | {category} | {dateAdded}
        </Typography>
      </CardContent>
      <Link to={`/service/${id}`}>
        <CardActions>
          <Button size="small" color="primary">
            Voir Plus
          </Button>
        </CardActions>
      </Link>
    </ServiceCardStyled>
  );
};

export default ServiceCards;
