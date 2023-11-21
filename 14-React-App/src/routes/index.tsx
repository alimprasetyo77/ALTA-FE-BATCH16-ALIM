import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "../pages"
import Books from "../pages/books"
import Dashboard from '../pages/admin/Dashboard'
import Login from "../pages/auth/Login"
import Register from '../pages/auth/Register'
import Profile from '../pages/profile'
import EditProfile from '../pages/profile/EditProfile'
import DetailBook from '../pages/books/DetailBook'
import ProtectedRoutes from './protected-routes'
import MyBooks from '../pages/profile/MyBooks'
const router = () => {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list-books",
          element: <Books />
        },
        {
          path: "/history-borrow",
          element: <MyBooks />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/my-profile",
          element: <Profile />
        },
        {
          path: "/settings",
          element: <EditProfile />
        },
        {
          path: "/detail-book/:id",
          element: <DetailBook />
        },
        {
          path: "*",
          element: <div className='font-bold text-2xl absolute top-1/2 right-1/2 translate-y-1/2 translate-x-1/2'>404 page not found!</div>
        }
      ]
    }

  ])
  return <RouterProvider router={router} />
}

export default router