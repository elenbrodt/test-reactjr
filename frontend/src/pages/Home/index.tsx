import Stack from "react-bootstrap/Stack";
function Produtos() {
  return (
    <div className='my-5'>
      <h1 className='my-5'> Bem-vindo(a)! </h1>
      <Stack gap={4} className='col-md-5 mx-auto'>
        <p>/produtos para a lista de todos os produtos</p>
        <p>/cadastro para cadastrar produto</p>
        <p>/deletar/:id para deletar produto</p>
        <p>/atualizar/:id para atualizar produto</p>
      </Stack>
    </div>
  );
}

export default Produtos;
