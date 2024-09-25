const Book = require("../models/book_Schema");
const wrapAsyc = require("../utils/wrapAsyc");

// create Book
const createBook = wrapAsyc(async (req, res) => {
  const { title, author, genre, available } = req.body;
  const data = await Book.create(req.body);
  res.status(200).json({ message: "Book created successfully", datas: data });
});

// find all book
const AllBook = async  (req, res) => {
  const books = await Book.find();
  res.status(200).json({ message: "All Books", Data: books });
};

// single book
const SingleBook = wrapAsyc(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// update book
const UpdateBook = wrapAsyc(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ message: "Book Updated", Data: book });
});

// delete book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndDelete(id);
  res.status(200).json({ message: "Book Deleted", Data: book });
};

// borrow book
const borrowBook = wrapAsyc(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book || !book.available) {
    return res.status(400).json({ error: "Book is not available" });
  } else {
    book.available = false;
    book.borrowedBy = req.body.userId;
    await book.save();
    res.json({ message: "Book borrowed successfully", book });
  }
});

// return book
const returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  // Check if the book exists, is borrowed, and the borrowedBy field matches the current user
  if (
    !book ||
    book.available ||
    !book.borrowedBy ||
    !book.borrowedBy.equals(req.body.userId)
  ) {
    return res.status(400).json({ error: "Cannot return this book" });
  }

  book.available = true;
  book.borrowedBy = null;
  await book.save();

  res.json({ message: "Book returned successfully" });
};

module.exports = {
  createBook,
  AllBook,
  SingleBook,
  UpdateBook,
  deleteBook,
  borrowBook,
  returnBook,
};
