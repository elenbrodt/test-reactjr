import { useState } from "react";
import { atualizarProduto } from "../../services/MainApi/produtos";
import { Button, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Container, FormContainer } from "./style";
import Input from "../../components/Inputs";

function UpdateProduto() {
  const { id } = useParams();
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number>(0);

  const [data_cadastro, setDataCadastro] = useState<Date>();

  const navigate = useNavigate();

  const atualiza = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      descricao,
      preco,
    };
    try {
      const response = await atualizarProduto(id, payload);
      if (response.status !== 204) {
        console.log(response);
        return alert("Deu algo errado no catch");
      }

      alert("Atualizado com sucesso");
      navigate("/produtos");
    } catch (error) {
      alert("Algo errado no catch");
    }
  };
  return (
    <Container>
      <h1>Cadastro de produtos</h1>
      <Stack gap={4} className='col-md-12'>
        <FormContainer onSubmit={atualiza}>
          <Input
            label='Descrição'
            value={descricao}
            type='text'
            placeholder='Descreva aqui'
            onChange={(event) => setDescricao(event)}
          />
          <Input
            label='Preço'
            value={preco}
            type='number'
            placeholder='preço produto'
            onChange={(event) => setPreco(event)}
          />
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </FormContainer>
      </Stack>
    </Container>
  );
}
export default UpdateProduto;
