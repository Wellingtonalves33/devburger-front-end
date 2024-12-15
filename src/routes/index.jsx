import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";

export const router = createBrowserRouter([
   
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
    {
        path: "*",  // Isso captura todas as rotas não definidas
        element: <div>Página não encontrada</div>, // Você pode criar um componente próprio para erro 404
    }
]);