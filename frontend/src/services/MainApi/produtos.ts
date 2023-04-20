import baseApi from "./config";

interface ProdutoPayload {
  descricao: string;
  preco: number;
  data_cadastro?: Date;
}

export function cadastroProduto(payload: ProdutoPayload) {
  return baseApi.post("/cadastrar", payload);
}

export function listarProduto() {
  return baseApi.get("/produtos");
}

export function deletarProduto(props: any) {
  return baseApi.delete(`/deletar/${props}`);
}

export function atualizarProduto(props: any, payload: ProdutoPayload) {
  return baseApi.put(`/atualizar/${props}`, payload);
}
