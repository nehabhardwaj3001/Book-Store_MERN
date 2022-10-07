import React, { useState } from "react";
import { FormLabel, TextField, Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import './Book/Book.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '', 
    price: '', 
    image: ""
  });
  const[checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const sendRequest = async() => {
    await axios.post("http://localhost:5000/addBook", {
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

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        margin = '30px auto'
      >
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal"  variant="standard" name="name" />
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal"  variant="standard" name="author" />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description} onChange={handleChange}
          margin="normal"
          
          variant="standard"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type='number' margin="normal"  variant="standard" name="price" />
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin="normal"  variant="standard" name="image" />
        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>} label="Available" />
        <Button variant="contained" type='submit' sx={{mt: '20px', height: "50px"}}>Add Book</Button>
      </Box>
    </form>
  );
};

export default AddBook;
