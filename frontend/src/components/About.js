import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{mt: '50px'}} variant='h2'>This is a CRUD Application</Typography>
        <Typography sx={{mt: '50px'}} variant='h3'> BY MERN STACK</Typography>
      </Box>
    </div>
  )
}

export default About;