/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { AiFillSetting } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [active, setActive] = useState(false)
  const [isLogin, setIsLogin] = useState({ token: localStorage.getItem("token") })
  return (
    <div className="w-full px-10 py-4 border-b flex justify-between items-center h-20">

      <Link to={"/"} className="flex gap-2 items-center">
        <img width="48" height="48" src="../images/book.png" alt="open-book" />
        <h3 className="font-semibold text-xl font-Montserrat ">LibraryApp</h3>
      </Link>

      {isLogin.token ?
        <div className="flex items-center gap-x-2 relative cursor-pointer " onClick={() => setActive(!active)}>
          <div className="flex items-center gap-x-2 hover:bg-gray-200 duration-200 rounded-lg p-2">
            <img src="https://source.unsplash.com/40x40?profile-professional" alt="profile" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-sm tracking-wider">Admin</span>
            <button >
              <BsChevronDown />
            </button>
          </div>

          {active ?
            <div id="profile-menu" className="absolute top-14 -right-2  bg-white border shadow-md rounded-md text-gray-500 text-sm font-semibold z-10">
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