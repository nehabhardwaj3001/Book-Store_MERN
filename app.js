const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");

const app = express();

// middleware
app.use("/books", router)   //localhost/5000/books

mongoose
    .connect("mongodb+srv://neha:neha@cluster0.zluivgn.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected to the Database..........."))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));


// mongodb+srv://neha:<password>@cluster0.zluivgn.mongodb.net/?retryWrites=true&w=majority