import React, { useState } from 'react'
import { categories } from '../../data/constants'
import { Box, Stack, Typography } from '@mui/material'
function Sidebar({selectedCategory,setSelectedCategory,inputThemes}) {

  return (
      <Stack
          direction='row'
          sx={{
              overflowY:'auto',
              height: { sx: 'auto', md: '95%' },
              flexDirection:{md:'column'},
              background:inputThemes=='light'?'#fff':'#111',
              position:'sticky',
              top:"70px",
              width: { sx: 'auto', md: '200px'}
      }}>
   <Typography sx={{
           
        }}>
            Categories
        </Typography>
        <Box sx={{
            width:'100%',
            height:'60%',
            overflow:'scroll',
            margin:'20px 0'
        }}>
         
          {
              categories.map((category) => <button className='category-btn' style={{ background: category.name === selectedCategory && '#FC1503',width:'100%' }} onClick={() => {
                  setSelectedCategory(category.name)
              }}
              key={category.name}>
                  <span style={{ color: category.name === selectedCategory ? 'white' :'red',marginRight:'15px'}}>{category.icon}</span>
                  <span className={inputThemes=="light"?'light':'dark'} >{category.name}</span>

              </button>)
          }
          </Box>
          <button style={
        {
            width:'100%',
            height:'40px',
            margin:'10px 0',
            border:'none'
            
        }
          } className='category-btn'>Subscription</button>          <button style={
            {
                width:'100%',
                height:'40px',
                margin:'10px 0',
                border:'none'
                
            }
              } className='category-btn'>Playlist</button>

<button style={
        {
            width:'100%',
            height:'40px',
            margin:'10px 0',
            border:'none'
            
        }
          } className='category-btn'>Your videos</button>
    </Stack>
  )
}

export default Sidebar