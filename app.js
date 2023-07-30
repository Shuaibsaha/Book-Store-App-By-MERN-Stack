 const express = require('express');
 const mongoose = require('mongoose');
const router = request("./routes/book-routes");
const cors = require("cors");
 const app = express();

  // middlewares
  app.use(express.json());
  app.use(cors());  
  app.use("/books", router)  // localhost: 5000/books

 mongoose
       .connect(
           "mongodb+srv://mohd:Px8cyPosr1feGijY@cluster0.ymhxb4e.mongodb.net/bookstore?retryWrites=true&w=majority"
       )
 .then(()=>console.log("Connected to Database"))
   .then( () => {
          app.listen(5000);
 })
 .catch((err)=>console.log(err));



