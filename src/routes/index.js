const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/", produtoController.listarProdutos);
routes.post("/cadastrar", produtoController.cadastrarProduto);
routes.delete("/deletar/:id", produtoController.deletarProduto);
routes.put("/atualizar/:id", produtoController.atualizarProduto);

module.exports = routes;
