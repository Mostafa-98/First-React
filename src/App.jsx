


import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Porfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {



  const router = createBrowserRouter([
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    {path: "portfolio", element: <Portfolio />},
    { path: "/", element: <Home /> },
    {path: "*", element: <h1>404 Not Found</h1>}
    
    
  ])

  return (
    <>
      <RouterProvider router={router}  />
    </>
  )
}

export default App
