import baseApi from "./config";

interface ProdutoPayload {
  descricao: string;
  preco: number;
}

export function cadastroProduto(payload: ProdutoPayload) {
  return baseApi.post("/cadastrar", payload);
}

export function listarProduto() {
  return baseApi.get("/produtos");
}
