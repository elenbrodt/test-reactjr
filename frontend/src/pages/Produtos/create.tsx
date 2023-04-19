import { useState } from "react";
import { cadastroProduto } from "../../services/MainApi/produtos";
import { Button, Stack } from "react-bootstrap";
import { Container, FormContainer } from "./style";
import Input from "../../components/Inputs";

function ProdutoCadastro() {
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number>(0);

  const cadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      descricao,
      preco,
    };
    try {
      const response = await cadastroProduto(payload);
      if (response.status !== 200) {
        return alert("Deu algo errado aqui");
      }
      alert("Cadastro efetuado com sucesso");
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
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </FormContainer>
      </Stack>
    </Container>
  );
}
export default ProdutoCadastro;
