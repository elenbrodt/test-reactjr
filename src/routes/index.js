const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/", produtoController.listarProdutos);

routes.post("/cadastrar", produtoController.cadastrarProduto);

module.exports = routes;
