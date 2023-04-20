const Produtos = require("../models/produtos.js");

const produtoController = {
  async listarProdutos(req, res) {
    try {
      const listaDeTodosProdutos = await Produtos.findAll();
      console.log(listaDeTodosProdutos);
      res.status(200).json(listaDeTodosProdutos);
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
  async atualizarProduto(req, res) {
    try {
      const { id } = req.params;
      const { descricao, preco, data_cadastro } = req.body;
      const atualizaProduto = await Produtos.update(
        {
          descricao,
          preco,
          data_cadastro,
        },
        {
          where: {
            codigo_id: id,
          },
        }
      );
      if (atualizaProduto === 0) {
        res.status(404).json("produto nao encontrado");
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      console.log(error);
    }
  },

  async deletarProduto(req, res) {
    try {
      const { id } = req.params;
      const deleteProduto = await Produtos.destroy({
        where: {
          codigo_id: id,
        },
      });
      if (deleteProduto === 0) {
        res.status(404).json("produto nao encontrado");
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = produtoController;
