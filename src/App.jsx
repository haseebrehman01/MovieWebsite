import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import Movie from './Movie'
import { Contact, contactData } from './Contact'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './ErrorPage'
import { getMoviesData } from './APi/getMoviesData'
import { MovieDetails } from './Components/UI/MovieDetails'
import { getMovieDetails } from './APi/GetMovieDetails'

function App() {

  // Define all routes for the application
  const router = createBrowserRouter([
    {
      path: '/',                          // Base path
      element: <AppLayout />,             // Main layout wrapper
      errorElement: <ErrorPage />,        // Error page for invalid routes
      children: [                         // Nested routes inside AppLayout
        
        {
          path: '/',                      // Home page
          element: <Home />
        },
        {
          path: '/About',                 // About page
          element: <About />
        },
        {
          path: '/Movie',                 // Movies list page
          element: <Movie />,
          loader: getMoviesData           // Fetch movies data before rendering
        },
        {
          path: '/Movie/:MovieId',        // Movie details page (dynamic route)
          element: <MovieDetails />,
          loader: getMovieDetails         // Fetch single movie details
        },
        {
          path: '/Contact',               // Contact page
          element: <Contact />,
          action: contactData             // Handles form submission on contact page
        },
      ]
    }
  ])

  // Provide router to the app
  return <RouterProvider router={router} />
}

export default App
