import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormLabel, TextField, Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import './Book.css';

const BookDetail = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState();
  const[checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      return await axios.delete(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id])

  const sendRequest = async() => {
    await axios.put(`http://localhost:5000/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then(res => res.data);
  }

  const handleSubmit = (e, inputs) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books"));
  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  return (
    <div>
    {inputs && <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        margin = '74px auto'
        border='1px solid olivedrab'
        borderRadius='10px'
        padding='30px'
      >
        <FormLabel>Name:-</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal"  variant="standard" name="name" />
        <FormLabel>Author:-</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal"  variant="standard" name="author" />
        <FormLabel>Description:-</FormLabel>
        <TextField
          value={inputs.description} onChange={handleChange}
          margin="normal"
          
          variant="standard"
          name="description"
        />
        <FormLabel>Price:-</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type='number' margin="normal"  variant="standard" name="price" />
        <FormLabel>Image:-</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin="normal"  variant="standard" name="image" />
        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>} label="Available" />
        <Button variant="contained" type='submit' sx={{mt: '20px', height: "50px"}}>Update Book</Button>
      </Box>
    </form>}
    </div>
  )
}

export default BookDetail;