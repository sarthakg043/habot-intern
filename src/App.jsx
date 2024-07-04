import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { ErrorPage, Home } from './pages'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>

  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
