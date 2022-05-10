import React from 'react'
import { Box, Button, TextField } from '@mui/material'

export default function Search({setSearch, setPageNumber}) {
  return (
      <Box
      component="form"
      autoComplete='off'
      sx={{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        '@media (max-width: 900px)':{
            flexDirection:'column',
        }
      }}
      mb={5}
      >
        <TextField 
        color='primary'
        id="outlined-basic"
        variant='outlined'
        label='Search for Characters'
        onChange={e => {
        setPageNumber(1)
        setSearch(e.target.value)
        }} 
        sx={{
            width: '40%',
            marginRight: '10px',
            '@media (max-width: 900px)':{
                width:'80%',
                marginBottom:'10px',
            }}}
        ></TextField>
        <Button onClick={e => (e.preventDefault())} variant="contained" size='large' sx={{ fontSize:'16px', padding: '14px'}}>Search</Button>
    </Box>
  )
}
