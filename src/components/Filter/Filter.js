import { Container, Typography } from '@mui/material'
import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

export default function Filter({ setStatus, setPageNumber, setSpecies, setGender }) {
  return (
    <Container>
        <Typography variant='h5' align='center'>Filters</Typography>
        <div 
        style={{ cursor:'pointer'}} 
        className='text-center text-primary text-decoration-underline mb-4'
        onClick={() => {
            setStatus("")
            setSpecies("")
            setGender("")
            setPageNumber(1)
            window.location.reload(false)
        }}
        >Clear Filters</div>
        <div className="accordion" id="accordionExample">
            <Status setStatus={setStatus} setPageNumber={setPageNumber} /> 
            <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
            <Gender setGender={setGender} setPageNumber={setPageNumber} />
        </div>
    </Container>
  )
}
