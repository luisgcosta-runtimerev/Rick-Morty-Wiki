import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Cards from '../components/Card/Cards'
import Pagination from '../components/Pagination/Pagination'
import InputGroup from '../components/Filter/InputGroup'

export default function Episodes() {
const [id, setID] = useState(1)
const [results, setResults] = useState([])
const [data, setData] = useState([])
const {air_date, name} = results
const api = `https://rickandmortyapi.com/api/episode/${id}` 


useEffect(()=>{
    (async function(){
        const myData = await fetch(api)
        .then(response => response.json())
        setResults(myData)
        
        const x = await Promise.all(myData.characters.map((item) =>{
            return fetch(item).then(res => res.json())
        }))
        setData(x)
    })();
}, [api])

console.log('results:', results)

  return (

  <div className="container"> 
  <div className="row mb-4">
      <Typography variant='h3' component='h1' align='center' gutterBottom>Episode: <Typography variant='span' color='primary'>{name === '' ? 'Unknown' : name} </Typography></Typography>
      <Typography variant='h6' align='center'>Air date: {air_date === '' ? 'Unknown' : air_date} </Typography>
      <div className="row">
        <div className='col-lg-3 col-12'>
          <Typography variant='h6' element='h4' align='center' mb={4} >Pick Episodes</Typography>  
          <InputGroup name='Episode' total={51} setID={setID}/>
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
