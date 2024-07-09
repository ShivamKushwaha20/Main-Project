import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Aboutpage from '../Components/About/Aboutpage.jsx'
import Homepage from '../Components/Homepage/Homepage.jsx'
import { ContactPage } from '../Components/Contact/ContactPage.jsx'
import { Project } from '../Components/Project/Project.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:"", 
        element:<Homepage/> 
      },
      {
        path:"about",
        element: <Aboutpage/>
      },
      {
        path:"project", 
        element:<Project/> 
      },
      {
        path:"contact",
        element: <ContactPage/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
