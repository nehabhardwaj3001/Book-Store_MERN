import React from 'react';
import {Button} from '@mui/material';
import './Book.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const handleDelete = () => {
    console.log("hi", id)
    axios.delete(`http://localhost:5000/books/${_id}`)
    .then((res) => res.data)
    .then(() => navigate("/books"));
  }

  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs. {price}</h2>
      <div>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt: 'auto'}}>Update</Button>
        <Button LinkComponent={Link} to={`/books/${_id}`} onClick={handleDelete} sx={{mt: 'auto'}}>Delete</Button>
      </div>
    </div>
  )
}

export default Book;