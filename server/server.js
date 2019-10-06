// I m using Supertest application for testing express apps
const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found."
  });
});

app.get("/user", (req, res) => {
  res.status(200).send([
    {
      name: "Kautuk",
      age: 20
    },
    {
      name: "Saurabh",
      age: 21
    },
    {
      name: "Kuldeep",
      age: 22
    },
    {
      name: 'Alfaiz'
    }
  ]);
});

app.listen(3300);
module.exports.app = app;
