import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import AllRecipes from './Components/AllRecipes/AllRecipes'
import ContactUs from './Components/ContactUs/ContactUs'

let router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'recipes', element: <AllRecipes /> },
    { path: 'contact', element: <ContactUs /> }
  ]
}])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
