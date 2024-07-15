import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Style/index.css'
import Pedidos from './Pedidos.jsx'
import Mesa from './mesa.jsx'
import Orden from './Orden.jsx'
import Estado from './Estado.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pedidos/>
  },
  {
    path: "/mesa/:id",
    element: <Mesa />
  },
  {
    path: "/mesa/:id/Orden/",
    element: <Orden/>
  },
  {
    path: "/mesa/:id/Estado/",
    element: <Estado/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
