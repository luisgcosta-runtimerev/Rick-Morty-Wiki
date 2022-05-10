import { Typography, Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Cards from '../components/Card/Cards';
import InputGroup from '../components/Filter/InputGroup';

export default function Location() {
    const [id, setID] = useState(1);
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);
    const { name, type, dimension } = results;
    const api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async () => {
            const myData = await fetch(api).then((response) => response.json());
            setResults(myData);

            const x = await Promise.all(
                myData.residents.map((item) =>
                    fetch(item).then((res) => res.json())
                )
            );
            setData(x);
        })();
    }, [api]);

    return (
        <Container>
            <Grid container spacing={2} mb={4}>
                <Grid container item direction="column">
                    <Typography
                        variant="h3"
                        component="h1"
                        align="center"
                        gutterBottom
                    >
                        Location:{' '}
                        <Typography variant="span" color="primary">
                            {name === '' ? 'Unknown' : name}{' '}
                        </Typography>
                    </Typography>
                    <Typography variant="h6" align="center">
                        Dimension: {dimension === '' ? 'Unknown' : dimension}{' '}
                    </Typography>
                    <Typography variant="h6" align="center">
                        Type: {type === '' ? 'Unknown' : type}{' '}
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography
                            variant="h6"
                            element="h4"
                            align="center"
                            mb={4}
                        >
                            Pick Location
                        </Typography>
                        <InputGroup name="Location" total={126} setID={setID} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid
                            container
                            mx={1}
                            spacing={{ xs: 0, sm: 2, md: 2 }}
                        >
                            <Cards data={data} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
