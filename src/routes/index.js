const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Olá mundo");
});

routes.post("/cadastrar", (req, res) => {
  console.log(req.body);
  res.send("Cadstrei um prosuto");
});

module.exports = routes;
