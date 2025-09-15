import React from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import Contact from './Contact'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './ErrorPage'

function App() {
const router = createBrowserRouter([
 {
  path:'/',
  element:<AppLayout />,
  errorElement:<ErrorPage />,//for Error page
  children:[
    {
    path: '/Home',
    element: <Home />
  },
    {
    path: '/About',
    element: <About />
  },
      {
    path: '/Movie',
    element: <Movie />
  },
      {
        
    path: '/Contact',
    element: <Contact />
  },
]

 }
])

return <RouterProvider router={router} />
}

export default App