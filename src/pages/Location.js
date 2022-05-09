import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Cards from '../components/Card/Cards'
import Pagination from '../components/Pagination/Pagination'
import InputGroup from '../components/Filter/InputGroup'

export default function Location() {
const [id, setID] = useState(1)
const [results, setResults] = useState([])
const [data, setData] = useState([])
const {name, type, dimension} = results
const api = `https://rickandmortyapi.com/api/location/${id}` 


useEffect(()=>{
    (async function(){
        const myData = await fetch(api)
        .then(response => response.json())
        setResults(myData)
        
        const x = await Promise.all(myData.residents.map((item) =>{
            return fetch(item).then(res => res.json())
        }))
        setData(x)
    })();
}, [api])

console.log('results:', results)

  return (

  <div className="container"> 
  <div className="row mb-4">
      <Typography variant='h3' component='h1' align='center' gutterBottom>Location: <Typography variant='span' color='primary'>{name === '' ? 'Unknown' : name} </Typography></Typography>
      <Typography variant='h6' align='center'>Dimension: {dimension === '' ? 'Unknown' : dimension} </Typography>
      <Typography variant='h6' align='center'>Type: {type === '' ? 'Unknown' : type} </Typography>
      <div className="row">
        <div className='col-lg-3 col-12'>
          <Typography variant='h6' element='h4' align='center' mb={4} >Pick Location</Typography>  
          <InputGroup name='Location' total={126} setID={setID}/>
        </div>
        <div className='col-lg-8 col-12'>
            <div className='row'>
                <Cards data={data}/>
            </div>
        </div>
    </div>
  </div>
  </div>

  )
}