import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Search from '../components/Search/Search';
import Cards from '../components/Card/Cards';
import Pagination from '../components/Pagination/Pagination';
import Filter from '../components/Filter/Filter';

export default function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');
    const [data, setData] = useState({});
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const { info, results } = data;
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async () => {
            await fetch(api)
                .then((response) => response.json())
                .then((d) => setData(d));
        })();
    }, [api]);

    return (
        <div className="App">
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3}>
                    <Filter
                        setStatus={setStatus}
                        setPageNumber={setPageNumber}
                        setGender={setGender}
                        setSpecies={setSpecies}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Grid container mx={1} spacing={{ xs: 0, sm: 2, md: 2 }}>
                        <Cards data={results} />
                    </Grid>
                </Grid>
            </Grid>
            <Pagination
                info={info}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
            />
        </div>
    );
}
