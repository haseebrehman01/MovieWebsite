import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loading } from './Loading'

function AppLayout() {
  // useNavigation() gives the current navigation state (idle, loading, submitting, etc.)
  const navigateLoader = useNavigation();

  // If a route is currently loading (data fetching or navigation in progress),
  // show a loading screen instead of the layout
  if (navigateLoader.state === 'loading') return <Loading />

  return (
    <>
      {/* Common header for all pages */}
      <Header />

      {/* Outlet is where the child routes (Home, About, Movie, Contact, etc.) will render */}
      <Outlet />

      {/* Common footer for all pages */}
      <Footer />
    </>
  )
}

export default AppLayout
