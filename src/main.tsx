import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error404 from './routes/Error/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Unidade from './routes/Unidades/index.tsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>, errorElement: <Error404/>, children:[
    {path:"/login", element:<Login/>},
    {path:"/cadastro", element:<Cadastro/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/Contato", element:<Contato/>},
    {path:"/Faq", element:<Faq/>},
    {path:"/Unidade", element:<Unidade/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
