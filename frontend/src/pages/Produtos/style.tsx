import styled from "styled-components";
//import { Link } from "react-router-dom";
import { Form, Container as Wrapper } from "react-bootstrap";

export const Container = styled.div`
   {
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    gap: 50px;
    width: 800px;
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
