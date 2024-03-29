import { useState } from "react";
import { cadastroProduto } from "../../services/MainApi/produtos";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer } from "./style";
import Input from "../../components/Inputs";

function ProdutoCadastro() {
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number>(0);

  const [data_cadastro, setDataCadastro] = useState<Date>();

  const navigate = useNavigate();

  const cadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      descricao,
      preco,
      data_cadastro: new Date(),
    };
    try {
      const response = await cadastroProduto(payload);
      if (response.status !== 200) {
        return alert("Deu algo errado no catch");
      }

      alert("Cadastro efetuado com sucesso");
      navigate("/produtos");
    } catch (error) {
      alert("Algo errado no catch");
    }
  };
  return (
    <Container>
      <h1>Cadastro de produtos</h1>
      <Stack gap={4} className='col-md-12'>
        <FormContainer onSubmit={cadastro}>
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
          <Input
            label='Data'
            value={data_cadastro}
            type='date'
            placeholder='data de cadastro'
            onChange={(event) => setDataCadastro(event)}
          />
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </FormContainer>
      </Stack>
    </Container>
  );
}
export default ProdutoCadastro;
