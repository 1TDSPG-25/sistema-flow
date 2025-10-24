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
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>, errorElement: <Error404/>, children:[
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/cadastro", element:<Cadastro/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/contato", element:<Contato/>},
    {path:"/faq", element:<Faq/>},
    {path:"/unidade", element:<Unidade/>},
    {path:"/home", element:<Home/>}
  ]
}], {basename: "/sistema-flow"})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
