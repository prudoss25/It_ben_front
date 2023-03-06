import React from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 20px;
`;

const StyledMedia = styled(CardMedia)`
  height: 140px;
`;

const UserEntrepreneur = ({ name, bio, imageUrl, email, phoneNumber, location }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia image={imageUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
            <br />
            Phone Number: {phoneNumber}
            <br />
            Location: {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default UserEntrepreneur;
