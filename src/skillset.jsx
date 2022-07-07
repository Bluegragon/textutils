import * as React from 'react';
import Box from '@mui/material/Box';
import MySkills from './components/myskill';

export default function SkillSet() {
  return (
    <React.Fragment>
         <Box display="flex"
  flexDirection="row"
  justifyContent="center"
  m={4}
  sx={{backgroundColor:"primary.main"}}>
 <MySkills address='https://reactjs.org/logo-og.png' skilltext='I am a frontend developer i can build reactive sites using react'/>
      <MySkills address='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZlW3IZBrDmQ1ek_82xci1a5LYF_yJAI7QQ&usqp=CAU' skilltext='I am a frontend developer i can build reactive sites using react'/>
      <MySkills address='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZlW3IZBrDmQ1ek_82xci1a5LYF_yJAI7QQ&usqp=CAU' skilltext='I am a frontend developer i can build reactive sites using react'/>
      
      </Box>
    </React.Fragment>
  );
}
