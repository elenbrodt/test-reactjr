const Produtos = require("../models/Produtos.js");

const produtoController = {
  async listarProdutos(req, res) {
    try {
      const listaDeTodosPacientes = await Produtos.findAll();
      res.status(200).json(listaDeTodosPacientes);
    } catch (error) {
      console.log(error);
    }
  },
  async cadastrarProduto(req, res) {
    try {
      const { descricao, preco, data_cadastro } = req.body;

      const novoProduto = await Produtos.create({
        descricao,
        preco,
        data_cadastro,
      });

      res.json("Produto Cadastrado");
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = produtoController;
