import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
console.log("inputs", inputs)
  return (
    <div>
      {/* <Box display='flex' flexDirection='column' alignItems='center'>
        <Button LinkComponent={Link} to='/books' sx={{marginTop: 15, background: "green"}} variant='contained'>
          <Typography variant='h3'>View All Products</Typography>
        </Button>
      </Box> */}
      <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={500}
        alignContent={"center"}
        alignSelf="center"
        margin = '120px auto'
        // border='1px solid olivedrab'
        borderRadius='10px'
        padding='30px'
      >
        <FormLabel>Email</FormLabel>
        <TextField value={inputs.email} onChange={handleChange} margin="normal"  variant="standard" name="email" />
        <FormLabel>Password</FormLabel>
        <TextField
          value={inputs.password} onChange={handleChange}
          type='password'
          margin="normal"
          variant="standard"
          name="password"
        />
        {/* <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>} label="Available" /> */}
        <Button variant="contained" type='submit' sx={{mt: '20px', height: "50px"}}>Login</Button>
      </Box>
      </form>
    </div>
  )
}

export default Login;