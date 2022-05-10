import React, { useState, useEffect } from 'react'
import Search from '../components/Search/Search'
import Cards from "../components/Card/Cards";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";

export default function Home() {
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState("")
    const [data, setData] = useState({})
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")
    const {info, results} = data
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    
    
    useEffect(()=>{
        (async function(){
            await fetch(api)
            .then(response => response.json())
            .then(d => setData(d))
        })();
    }, [api])
    
    console.log(data)
    console.log(info)
  return (

<div className="App">
  <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
  <div className="container"> 
  <div className="row">
      <Filter setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
    <div className="col-lg-8 col-12">
      <div className="row">
        <Cards data={results} />
      </div>
    </div>
  </div>
  </div>
      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
</div>
  );
}
