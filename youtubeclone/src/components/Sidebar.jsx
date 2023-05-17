import React, { useState } from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'
function Sidebar({selectedCategory,setSelectedCategory}) {

  return (
      <Stack
          direction='row'
          sx={{
              overflowY:'auto',
              height: { sx: 'auto', md: '95%' },
              flexDirection:{md:'column'},
              position:'sticky',
              top:"60px"
      }}>
          {
              categories.map((category) => <button className='category-btn' style={{ background: category.name === selectedCategory && '#FC1503', color: '#fff' }} onClick={() => {
                  setSelectedCategory(category.name)
              }}
              key={category.name}>
                  <span style={{ color: category.name === selectedCategory ? 'white' :'red',marginRight:'15px'}}>{category.icon}</span>
                  <span style={{
                      opacity: category.name===selectedCategory?'1':'0.8'}}>{category.name}</span>

              </button>)
          }
    </Stack>
  )
}

export default Sidebar