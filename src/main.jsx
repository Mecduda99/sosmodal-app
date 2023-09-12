import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdquiraJa from './routes/AdquiraJa/index.jsx'
import Error from './routes/Error/index.jsx'
import FaleConosco from './routes/FaleConosco/index.jsx'
import Home from './routes/Home/index.jsx'
import SobreNos from './routes/SobreNos/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/sobrenos",
        element: <SobreNos/>
      },
      {
        path: "/faleconosco",
        element: <FaleConosco/>
      },
      {
        path: "/adquiraja",
        element: <AdquiraJa/>
      }
    ]
  }
]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
