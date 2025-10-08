import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>, children:[
    {path:"/", element:<Login/>},
    {path:"/cadastro", element:<Cadastro/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
