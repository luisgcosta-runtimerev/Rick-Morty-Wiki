import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import styles from './Cards.modules.scss';

export default function Cards({ data }) {
    const location = useLocation();
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {data
                ? data.map((card) => (
                      <Grid item xs={12} sm={6} md={4} key={card.id}>
                          <Link
                              className="position-relative text-dark"
                              key={card.id}
                              to={`${
                                  location.pathname === '/'
                                      ? ''
                                      : location.pathname
                              }/${card.id}`}
                              style={{ textDecoration: 'none' }}
                          >
                              <div className="cardstyle">
                                  <img
                                      src={card.image}
                                      alt={card.name}
                                      className="img-fluid img"
                                  />
                                  <Container
                                      disableGutters
                                      sx={{ padding: '10px' }}
                                  >
                                      <Typography mb={4} variant="h5">
                                          {card.name}
                                      </Typography>
                                      <Typography variant="p" paragraph>
                                          Last location:
                                      </Typography>
                                      <Typography variant="p">
                                          {card.location.name}
                                      </Typography>
                                  </Container>
                              </div>
                              {(() => {
                                  if (card.status === 'Alive') {
                                      return (
                                          <div
                                              className={`${styles.badge} position-absolute badge bg-success`}
                                          >
                                              {card.status}
                                          </div>
                                      );
                                  }
                                  if (card.status === 'Dead') {
                                      return (
                                          <div
                                              className={`${styles.badge} position-absolute badge bg-danger`}
                                          >
                                              {card.status}
                                          </div>
                                      );
                                  }

                                  return (
                                      <div
                                          className={`${styles.badge} position-absolute badge bg-secondary`}
                                      >
                                          {card.status}
                                      </div>
                                  );
                              })()}
                          </Link>
                      </Grid>
                  ))
                : 'No characters found. Please check if you write correctly what you are looking for'}
        </>
    );
}
