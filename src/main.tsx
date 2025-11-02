import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import ProdutoDetail from './routes/ProdutosDetail/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error404 from './routes/Error/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Unidade from './routes/Unidades/index.tsx'
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

import Perfil from './routes/Perfil/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>, errorElement: <Error404/>, children:[
    { path:"/", element:<Home/> },
    { path:"/login", element:<Login/> },
    { path:"/cadastro", element:<Cadastro/> },
    { path:"/produtos", element:<Produtos/> },
    { path:"/produtos/:id", element:<ProdutoDetail/> },
    { path:"/contato", element:<Contato/> },
    { path:"/faq", element:<Faq/> },
    { path:"/unidade", element:<Unidade/> },
    { path:"/home", element:<Home/> },
    { path:"/perfil", element:<Perfil/> },
    { path:"/perfil/:id", element:<Perfil/> },
    { path:"/integrantes", element: <Integrantes/> },
  ]
}], { basename: "/sistema-flow" })


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
