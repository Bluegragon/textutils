import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export default function Textutils() {
     let [text, setText] = useState("")
    
     const handleUpperClick=()=>{
          let uppertext=text.toUpperCase();
          setText(uppertext);
     }
     const handleLowerClick=()=>{
          let Lowertext=text.toLowerCase();
          setText(Lowertext);
     }
     const handleChange=(e)=>{
          setText(e.target.value);
     }
     const clearText=()=>{
          setText("");

     }
     const copyText=()=>{
          let copytext=document.getElementById("write")
          copytext.select()
          navigator.clipboard.writeText(copytext.value);
     }
     const removeSpaces=()=>{
          let newText=text.split(/[ ]+/)
          setText(newText.join(" "))
     }
  return (<>
     
     <Box display="flex" justifyContent="flex-start" p={10} >
         
     <TextField
     label="enter text"
  style={{width:1500,margin:10,}}
  multiline
  rows={14}
  p={10}
  value={text}
  onChange={handleChange}
  id="write"
  
/></Box>
<Box display="flex" justifyContent="flex-start " paddingLeft={15}>
<Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={handleUpperClick} >touppercase</Button>
      <Button variant="contained" onClick={handleLowerClick}>tolowercase</Button>
      <Button variant="contained" onClick={clearText}>CLEAR</Button>
      <Button variant="contained" onClick={copyText}>COPY</Button>
      <Button variant="contained" onClick={removeSpaces}>RemoveSpaces</Button>
     
    </Stack>
    
    </Box>
    <Box><h3>WORD COUNT</h3>
    <p>{text.split(" ").length} and length {text.length} </p>
    <p> time to read {text.length*0.008} minutes</p></Box>

</>

  )
}
