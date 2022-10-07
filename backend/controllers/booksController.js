// const { findByIdAndUpdate, findByIdAndDelete } = require("../models/Book");
const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ books });
};

exports.getById = async(req, res, next) => {
  const id = req.params.id;
  console.log('+++++++++++++++++++++++', id)
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: `No book found with ${id}` });
  }
  return res.status(200).json({ book });
}

exports.addBook = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name, author, description, price, available, image
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ book });
  // console.log(req.body);
  // res.send(req.body)
};

exports.updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name, author, description, price, available, image
    })
    book = await book.save();
  } catch(err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to Update Book by this ID" });
  }
  return res.status(200).json({ book });
}

exports.deleteBook = async(req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch(err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to Delete Book by this ID" });
  }
  return res.status(200).json({ message: "Book Successfully deleted" });
}