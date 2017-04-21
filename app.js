"use strict";

require("dotenv").config();
const express = require("express");
const app = express();

const routes = require("./routes/")

app.set("view engine", "pug")

app.use(express.static("public"));
app.use(routes);

app.use((req,res) => {
  res.render("404");
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> {
  console.log(`listening on port ${port} in ${process.env.NODE_ENV}`);
});
