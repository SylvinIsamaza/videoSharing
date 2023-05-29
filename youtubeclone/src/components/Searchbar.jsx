import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Searchbar() {
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
              pl:2,
              boxShadow:'none',
              mr:{sm:5}
          }}>
          <input
              className='search-bar'
              placeholder='search...'
             value={searchTerm}
              onChange={search}>
              
          </input>
          <Link to={(`/search/${searchTerm}`)}>
          <IconButton type='submit'>
          <Search color='red'/>
          </IconButton>
          </Link>
             
          </Paper>
          
  )
}

export default Searchbar