import * as React from 'react';
import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';

export default function Introduction() {
  return (
    <React.Fragment>
         <Box display="flex"
  justifyContent="center"
  
  
  >
         <Box width={200} p={10} >
       <CardMedia
        component="img"
        image="https://static.vecteezy.com/system/resources/thumbnails/005/610/578/small/cute-boy-wearing-hoodie-cartoon-illustration-vector.jpg"
        height='194'
      /></Box>
      </Box>
    </React.Fragment>
  );
}
