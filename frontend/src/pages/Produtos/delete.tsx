import { useEffect, useState } from "react";
import { deletarProduto } from "../../services/MainApi/produtos";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProdutoLista } from "./style";

export default function DeleteProduto() {
  const { id } = useParams();
  let [toggle, setToggle] = useState<boolean>(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await deletarProduto(id);
        console.log(response.data);
      } catch (error: any) {
        if (error.code === "ERR_BAD_REQUEST") {
          setToggle(!toggle);
        }
      }
    };
    getData();
  }, []);
  return (
    <ProdutoLista>
      <Card>
        {!toggle && <p>Produto não encontrado</p>}
        {toggle && <p>Produto deletado</p>}
      </Card>
    </ProdutoLista>
  );
}
