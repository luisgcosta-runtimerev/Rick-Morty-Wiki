import React from 'react'
import styles from './Search.module.scss'

export default function Search({setSearch, setPageNumber}) {
  return (
    <form className='mb-5 d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4'>
        <input 
        type='text' 
        className={styles.input} 
        placeholder='Search for Characters' 
        onChange={e => {
        setPageNumber(1)
        setSearch(e.target.value)
        }}/>
        <button 
        type='submit' 
        className={`${styles.btn} btn btn-primary fs-5`} 
        onClick={e => (e.preventDefault())}>
            Search</button>

    </form>
  )
}
