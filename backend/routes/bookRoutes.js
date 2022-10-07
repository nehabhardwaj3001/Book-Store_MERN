const express = require("express");
const router = express.Router();
const { getAllBooks, addBook, getById, updateBook, deleteBook } = require("../controllers/booksController");

router.route("/books").get(getAllBooks);
router.route("/addBook").post(addBook);
router.route("/books/:id").get(getById);
router.route("/books/:id").put(updateBook);
router.route("/books/:id").patch(updateBook);
router.route("/books/:id").delete(deleteBook);

module.exports = router;
