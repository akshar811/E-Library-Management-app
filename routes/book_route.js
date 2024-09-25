const { Router } = require("express");
const {
  createBook,
  AllBook,
  SingleBook,
  UpdateBook,
  deleteBook,
  borrowBook,
  returnBook,
} = require("../controllers/book_controller");

const { Auth } = require("../middleware/Auth");

const BookRoute = Router();

BookRoute.post("/create", Auth, createBook);

BookRoute.get("/AllBook", Auth, AllBook);

BookRoute.get("/SingleBook/:id", Auth, SingleBook);

BookRoute.patch("/updateBook/:id",Auth, UpdateBook);

BookRoute.delete("/DelteBook/:id",Auth, deleteBook);

BookRoute.post("/:id/borrow",Auth,borrowBook);

BookRoute.post("/:id/return",Auth,returnBook);

module.exports = BookRoute;

