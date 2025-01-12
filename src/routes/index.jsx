import { Route, Routes } from "react-router-dom";
import { Login, Cart, Home, Menu, Register, CompletePayment, Checkout, Orders, NewProduct, EditProduct, Products} from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router(){
    return(
        <Routes>
            {/* Login como rota inicial */}
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            
            {/* Rotas do usuário comum */}
            <Route path="/user" element={<UserLayout/>}>  
                <Route path="/user/home" element={<Home/>}/>
                <Route path="/user/cardapio" element={<Menu/>}/>
                <Route path="/user/carrinho" element={<Cart/>}/>
                <Route path="/user/checkout" element={<Checkout/>}/>
                <Route path="/user/complete" element={<CompletePayment/>}/>
            </Route>

            {/* Rotas do admin */}
            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin/pedidos" element={<Orders/>}/>
                <Route path="/admin/novo-produto" element={<NewProduct/>}/>
                <Route path="/admin/editar-produto" element={<EditProduct/>}/>
                <Route path="/admin/produtos" element={<Products/>}/>
            </Route>
        </Routes>
    )
}