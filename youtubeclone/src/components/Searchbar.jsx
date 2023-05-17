import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

function Searchbar(e) {
    const [searchTerm,setSearchTerm]=useState("")
    function search(e){
// setSearchTerm(e.target.value)
    }
//   console.log(searchTerm)
  return (
      <Paper
          component='form'
          onSubmit={(searchTerm) => { 
        //    <Link to={(`/search/${searchTerm}`)}></Link>
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
          <IconButton type='submit' sx={{p:'10px',color:'red'}}>
              <Search/>
          </IconButton>
          </Paper>
          
  )
}

export default Searchbar