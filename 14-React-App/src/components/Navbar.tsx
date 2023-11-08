import { useState } from "react"
import { AiFillSetting } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { Link, redirect } from "react-router-dom"
const Navbar = () => {
  const [active, setActive] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("role"))
  const logout = () => {
    sessionStorage.clear()
    redirect("/")
  }
  return (
    <div className="w-full px-10 py-4 border-b flex justify-between items-center h-20">
      <Link to={"/"} className="flex gap-2 items-center">
        <img width="48" height="48" src="images/book.png" alt="open-book" />
        <h3 className="font-semibold text-xl font-Montserrat ">library-app</h3>
      </Link>

      {isLogin ?
        <div className="flex items-center gap-x-2 relative cursor-pointer hover:text-teal-700" onClick={() => setActive(!active)}>
          <img src="https://moesaid.github.io/cleopatra/img/user.svg" alt="profile" className="w-8 h-8" />
          <span className="font-semibold text-sm">Admin</span>
          <button >
            <BsChevronDown />
          </button>

          {active ?
            <div id="profile-menu" className="absolute top-10 -right-2  bg-white border shadow-md rounded-md text-gray-500 text-sm font-semibold z-10">
              <Link to={'/my-profile'} className="flex items-center gap-x-2 py-3 px-8 hover:bg-gray-100 hover:text-gray-800 ">
                <FaUserEdit />
                <button>
                  <span className="whitespace-nowrap ">My Profile</span>
                </button>
              </Link>
              <Link to={'/settings'} className="flex items-center w-full justify-start gap-x-2 py-3 px-8 hover:bg-gray-100 hover:text-gray-800 ">
                <AiFillSetting />
                <button>
                  <span className="whitespace-nowrap ">Settings</span>
                </button>
              </Link>
              <Link to={'/'} className="flex items-center  gap-x-2  py-2 px-8 hover:bg-gray-100 hover:text-gray-800  border-t w-full" onClick={logout}>
                <RiLogoutCircleRLine />
                <button id="logout" >
                  <span >Log Out</span>
                </button>
              </Link>
            </div>
            : null}
        </div>
        :
        <div className="flex items-center gap-x-5 text-white">
          <Link to={'/login'}>
            <button className="px-4 py-2 bg-gray-500 rounded text-sm font-medium hover:bg-sky-500 transform duration-300">Login</button>
          </Link>
          <Link to={'/register'}>
            <button className="px-4 py-2 bg-gray-500 rounded text-sm font-medium hover:bg-red-500 transform duration-300">Register</button>
          </Link>
        </div>
      }


    </div>
  )
}

export default Navbar