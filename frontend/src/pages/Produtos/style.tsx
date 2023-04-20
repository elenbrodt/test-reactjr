import styled from "styled-components";
//import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";

export const Container = styled.div`
   {
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    gap: 50px;
    width: 1000px;
    justify-content: center;
    align-items: center;
  }
`;
export const ProdutoLista = styled.div`
   {
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    gap: 20px;
    align-items: center;
  }
`;
export const FormContainer = styled(Form)`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const CardProduto = styled(Card)`
  display: flex;
  align-items: center;
  width: 600px;
  text-align: start;
`;
