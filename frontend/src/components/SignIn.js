import { Box, Button, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {

  const [inputs, setInputs] = useState({
    name: '',
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
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal"  variant="standard" name="name" />
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