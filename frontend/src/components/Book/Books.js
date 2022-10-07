import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const fetchHandler = async () => {
  return await axios.get("http://localhost:5000/books")
    .then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <div className="book" key={i}>
              <Book book={book} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Books;