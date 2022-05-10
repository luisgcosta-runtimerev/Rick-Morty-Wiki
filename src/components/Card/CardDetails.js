import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CardDetails() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            await fetch(api)
                .then((response) => response.json())
                .then((d) => setData(d));
        })();
    }, [api]);

    return (
        <div className="container d-flex justify-content-center mb-5">
            <div className="d-flex flex-column gap-3">
                <Typography variant="h4" align="center">
                    {data.name}
                </Typography>
                <img className="img-fluid" src={data.image} alt={data.name} />

                {(() => {
                    if (data.status === 'Alive') {
                        return (
                            <div
                                className="badge bg-success fs-5"
                                type="button"
                            >
                                {data.status}
                            </div>
                        );
                    }
                    if (data.status === 'Dead') {
                        return (
                            <div className="badge bg-danger fs-5" type="button">
                                {data.status}
                            </div>
                        );
                    }

                    return (
                        <div className="badge bg-secondary fs-5" type="button">
                            {data.status}
                        </div>
                    );
                })()}
                <div className="content">
                    <Typography>
                        <Typography variant="span" fontWeight="700">
                            Gender:{' '}
                        </Typography>
                        {data.gender}
                    </Typography>
                    <Typography>
                        <Typography variant="span" fontWeight="700">
                            Location:{' '}
                        </Typography>
                        {data.location?.name}
                    </Typography>
                    <Typography>
                        <Typography variant="span" fontWeight="700">
                            Origin:{' '}
                        </Typography>
                        {data.origin?.name}
                    </Typography>
                    <Typography>
                        <Typography variant="span" fontWeight="700">
                            Species:{' '}
                        </Typography>
                        {data.species}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
