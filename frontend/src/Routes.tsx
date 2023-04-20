import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProdutoList from "./pages/Produtos/list";
import Home from "./pages/Home";
import ProdutoCadastro from "./pages/Produtos/create";
import DeleteProduto from "./pages/Produtos/delete";
import UpdateProduto from "./pages/Produtos/update";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<ProdutoList />} />
        <Route path='/cadastro' element={<ProdutoCadastro />} />
        <Route path='/deletar/:id' element={<DeleteProduto />} />
        <Route path='/atualizar/:id' element={<UpdateProduto />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
