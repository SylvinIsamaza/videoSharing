import { Card, Stack, Typography ,Button,Box} from '@mui/material'
import React, { useState } from 'react'
import {settingItems}from './settingData'
import {Account,Download,Languages,Privacy,Theme} from './settings'

function Settings() {
  const[selectedItem,setSelectedItem]=useState("Account")
  function changeSelectedItem(item){
    setSelectedItem(item)
  }
  const Component=({selectedItem})=>{
   if(selectedItem=="Account"){
      return <Account/>
   }
  else if(selectedItem=="Languages"){
      return <Languages/>
   }
   else if(selectedItem=="Download"){
      return <Download/>
   }
   if(selectedItem=="Privacy"){
      return <Privacy/>
   }
   if(selectedItem=="Theme"){
      return <Theme/>
   }
  }
  return (
    <Stack sx={{
        width: '100dvw',
        height:'auto',
        display:'flex',
        flexDirection:'row'

    }}>

 <Box sx={{
    width:'20%',
    maxWidth:'250px',
    height:'auto',
    display:"flex",
    flexDirection:'column',
    alignItems: 'center',
    padding:"60px 0 0 0",
    gap:'20px'
 }} className='setting_sidebar'>
{settingItems.map(item=>{
    return(<Button variant='text'  sx={{
        width:"95%",
        height:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:"flex-start",
      
    }} key={item.name } onClick={()=>{changeSelectedItem(item.name)}}><span style={{
   
    padding:'0 3px'
    }} className='setting_button' > {item.icon}</span><span className='setting_item'>{item.name}</span></Button>)
})}
 </Box>
 <Card sx={{
    height:'auto',
    flexGrow:1,
  

 }}>
   <Component selectedItem={selectedItem}/>
     
    
    </Card>
    </Stack>


  )
}

export default Settings