import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Servicos from './components/Servicos/Servicos'
import Contato from './components/Contato/Contato'

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "servicos",
        element: <Servicos />
      },
      {
        path: "contato",
        element: <Contato />
      }
    ]
  }

]);

function App() {

  return (
    <main className='App'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
