import { useEffect, useState } from "react";
import { listarProduto } from "../../services/MainApi/produtos";
import { ProdutoLista } from "./style";
import { Container, Table } from "react-bootstrap";
interface Produto {
  codigo_id: number;
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
    <ProdutoLista>
      <h1>Lista de Produtos</h1>
      <Table>
        <thead>
          <tr>
            <th>Código ID</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.codigo_id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ProdutoLista>
  );
}
