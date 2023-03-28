import React, { useEffect, useMemo } from 'react';
import { Container, Grid } from '@material-ui/core';
import Service from './ServiceCards';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceListes } from '../../services/actions/Service/ServiceAction';

const MarketPlaces = () => {
  const services = useSelector((state) => state.service.all)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServiceListes());
  }, []);
  const serviceList =useMemo(() => {
      return !!services ? [...services] : []
  },[services])
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {serviceList.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.idService}>
            <Service service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarketPlaces;
