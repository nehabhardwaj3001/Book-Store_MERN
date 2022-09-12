const express = require("express");
const router = express.Router();
const Book = require('../models/Book');
const booksController = require("../controllers/booksController");


router.get("/books", booksController.getAllBooks);

module.exports = router;