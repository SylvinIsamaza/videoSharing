import React, { useState } from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'
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
          {
              categories.map((category) => <button className='category-btn' style={{ background: category.name === selectedCategory && '#FC1503' }} onClick={() => {
                  setSelectedCategory(category.name)
              }}
              key={category.name}>
                  <span style={{ color: category.name === selectedCategory ? 'white' :'red',marginRight:'15px'}}>{category.icon}</span>
                  <span className={inputThemes=="light"?'light':'dark'} >{category.name}</span>

              </button>)
          }
    </Stack>
  )
}

export default Sidebar