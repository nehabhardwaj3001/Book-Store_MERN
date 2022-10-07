const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// const router = ;

const app = express();

//json() is a built-in middleware function in Express. method is used to parse the incoming requests with JSON payloads
app.use(express.json())

app.use(cors());
// middleware
app.use(require("./routes/bookRoutes")); //localhost/5000/books

mongoose
  .connect(
    `mongodb+srv://neha:neha_1234@cluster0.zluivgn.mongodb.net/ongraph?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to the Database..........."))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// mongodb+srv://neha:<password>@cluster0.zluivgn.mongodb.net/?retryWrites=true&w=majority
