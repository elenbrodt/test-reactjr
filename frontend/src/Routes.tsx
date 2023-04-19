import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProdutoList from "./pages/Produtos/list";
import Home from "./pages/Home";
import ProdutoCadastro from "./pages/Produtos/create";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<ProdutoList />} />
        <Route path='/cadastro' element={<ProdutoCadastro />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
