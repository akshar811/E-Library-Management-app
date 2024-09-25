const express = require('express');
const cookies = require("cookie-parser");
const connect = require('./config/db');
const Route = require('./routes/user_route');
const BookRoute = require('./routes/book_route');

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookies());

app.use("/User",Route);
app.use("/books",BookRoute);

app.listen(process.env.PORT, () => {
    connect();
    console.log(`listening on port ${process.env.PORT}`);
  });
  