import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Height, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Searchbar({inputThemes}) {
    const [searchTerm,setSearchTerm]=useState("")
    function search(e){
setSearchTerm(e.target.value)
    }
 
  return (
      <Paper
          component='form'
          onSubmit={(searchTerm) => { 
           
          }}
          sx={{
              borderRadius: 20,
              border: '1px solid #e3e3e3',
              pl:{sx:0,md:2},
              boxShadow:'none',
             marginLeft:'3%',
             
          }}>
          <input
              className={inputThemes }
              placeholder='search...'
             value={searchTerm}
              onChange={search}>
              
          </input>
          <Link to={(`/search/${searchTerm}`)}>
          <IconButton type='submit'>
          <Search className='search'/>
          </IconButton>
          </Link>
             
          </Paper>
          
  )
}

export default Searchbar