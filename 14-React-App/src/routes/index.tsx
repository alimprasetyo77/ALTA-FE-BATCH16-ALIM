import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "../pages"
import Books from "../pages/books"
import History from '../pages/books/History'
import Login from "../pages/auth/Login"
import Register from '../pages/auth/Register'
import Profile from '../pages/profile'
import EditProfile from '../pages/profile/EditProfile'
import DetailBook from '../pages/books/DetailBook'
const router = () => {
  // const loggedIn = sessionStorage.getItem("role")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/list-books",
      element: <Books />
    },
    {
      path: "/history",
      element: <History />
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
    }

  ])
  return <RouterProvider router={router} />
}

export default router