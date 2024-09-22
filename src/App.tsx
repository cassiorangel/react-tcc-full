import './App.css'
import TodoProvider from './context/todoContext'
import AddTodo from './components/AddTodo'
import Todos from './containers/Todos'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './navbar/Navbar'

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
        element: <Todos />,
      },
      {
        path: "login",
        element: <AddTodo />,
      }
    ]
  }

]);

function App() {

  return (
    <TodoProvider>
      <main className='App'>
        <RouterProvider router={router} />
      </main>
    </TodoProvider>
  )
}

export default App
