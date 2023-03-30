require("dotenv").config();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// my routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripepayment");


//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//my middleware routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);


//Port
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
