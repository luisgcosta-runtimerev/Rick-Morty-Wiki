import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

export default function Filter({ setStatus, setPageNumber, setSpecies, setGender }) {
  return (
    <div className='col-3'>
        <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
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
    </div>
  )
}
