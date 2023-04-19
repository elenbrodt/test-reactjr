import baseApi from "./config";

interface ProdutoPayload {
  descricao: string;
  preco: string;
}

export function cadastroProduto(payload: ProdutoPayload) {
  return baseApi.post("/cadstrar/:id", payload);
}

export function listarProduto() {
  return baseApi.get("/produtos");
}
