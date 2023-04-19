import { useEffect, useState } from "react";
import { listarProduto } from "../../services/MainApi/produtos";

interface Produto {
  descricao: string;
  preco: number;
}

export default function ProdutoList() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarProduto();
        setProdutos(response.data);
      } catch (error) {
        alert("deu algo errado");
      }
    };
    getData();
  }, [setProdutos]);
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul className='produto-list'>
        {produtos.map((produto, index) => (
          <li key={index}>
            {produto.descricao} | {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
