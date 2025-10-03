import React from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import Movie from './Movie'
import {Contact, contactData} from './Contact'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './ErrorPage'
import {getMoviesData} from './APi/getMoviesData'
import {MovieDetails} from './Components/UI/MovieDetails'
import { getMovieDetails } from './APi/GetMovieDetails'
function App() {
const router = createBrowserRouter([
 {
  path:'/',
  element:<AppLayout />,
  errorElement:<ErrorPage />,//for Error page
  children:[
    {
    path: '/',
    element: <Home />
  },
    {
    path: '/About',
    element: <About />
  },
      {
    path: '/Movie',
    element: <Movie />,
    loader: getMoviesData
  },
        {
    path: '/Movie/:MovieId',
    element: <MovieDetails />,
    loader: getMovieDetails
  },
      {
        
    path: '/Contact',
    element: <Contact />,
    action: contactData
  },
]

 }
])

return <RouterProvider router={router} />
}

export default App