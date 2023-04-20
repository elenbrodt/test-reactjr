import { useEffect, useState } from "react";
import { listarProduto } from "../../services/MainApi/produtos";
import { CardProduto, ProdutoLista } from "./style";
import { Button } from "react-bootstrap";
interface Produto {
  codigo_id: number;
  descricao: string;
  preco: number;
  data_cadastro: string;
}

export default function ProdutoList() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [toggle, setToggle] = useState<boolean[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarProduto();
        setProdutos(response.data);
        setToggle(Array(response.data.length).fill(false));
      } catch (error) {
        alert("deu algo errado");
      }
    };
    getData();
  }, []);

  const handleClick = (index: number) => {
    setToggle((prevToggleStates) =>
      prevToggleStates.map((toggleState, i) =>
        i === index ? !toggleState : toggleState
      )
    );
  };
  return (
    <ProdutoLista>
      <h1>Lista de Produtos</h1>
      {produtos.map((produto, index) => (
        <CardProduto key={index}>
          <CardProduto.Body className='d-flex w-100 justify-content-between'>
            <div className='d-flex flex-column'>
              <p className=' mb-0'>Código ID: {produto.codigo_id}</p>
              <p className=' mb-0'>Descrição: {produto.descricao}</p>
            </div>
            {toggle[index] && (
              <div className='d-flex flex-column'>
                <p className=' mb-0'>R$ {produto.preco}</p>
                <p className=' mb-0'>{produto.data_cadastro}</p>
              </div>
            )}
            <Button className='mx-3' onClick={() => handleClick(index)}>
              Detalhes
            </Button>
          </CardProduto.Body>
        </CardProduto>
      ))}
    </ProdutoLista>
  );
}
