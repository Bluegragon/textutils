import * as React from 'react';
import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';

export default function MySkills(props) {
     const address=props.address;
     const skilltext=props.skilltext;
  return (
    <React.Fragment>
         <Box display="flex"
  justifyContent="space-betweenr"
  p={4}
  m={3}
  sx={{backgroundColor:"white",boxShadow:"1px 1px 2px 2px",borderRadius:"6%"}}
  
  
  >
         <Box width={250} p={10} >
       <CardMedia
        component="img"
        image={address}
        height='194'
        
      />
      <Box p={2}>

        {skilltext}   
           </Box></Box>
      </Box>
    </React.Fragment>
  );
}
