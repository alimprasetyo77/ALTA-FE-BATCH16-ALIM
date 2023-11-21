/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { AiFillSetting } from "react-icons/ai"
import { BsChevronDown, BsSunFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useToken } from "../utils/contexts/token"
import { BiSolidMoon } from "react-icons/bi"
import useTheme from "../utils/hooks/useTheme"
const Navbar = () => {
  const [active, setActive] = useState(false)
  const { user, token } = useToken()
  const { toggleTheme, theme } = useTheme();
  // const [isLogin, setIsLogin] = useState({ token: localStorage.getItem("token") })
  return (
    <div className="w-full px-10 py-4 border-b flex justify-between items-center h-20 dark:bg-gray-900 dark:text-white dark:border-gray-700 ">

      <Link to={"/"} className="flex gap-2 items-center">
        <img width="48" height="48" src="../images/book.png" alt="open-book" />
        <h3 className="font-semibold text-xl font-Montserrat ">LibraryApp</h3>

      </Link>

      <div className="flex gap-x-8">
        {token ?
          <div className="flex items-center gap-x-2 relative cursor-pointer " onClick={() => setActive(!active)}>
            <div className="flex items-center gap-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200 rounded-lg p-3">
              <img src={user.profile_picture} alt="profile" className="w-8 h-8 rounded-full" />
              <span className="font-semibold text-sm tracking-wider">{user.full_name}</span>
              <button >
                <BsChevronDown />
              </button>
            </div>

            {active ?
              <div id="profile-menu" className="w-44 absolute top-16 -right-0  bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-md rounded-md text-gray-500 dark:text-gray-300 text-sm font-semibold z-10 overflow-hidden ">
                <Link to={'/my-profile'} className="flex items-center gap-x-2 py-3 px-8 hover:bg-gray-100 hover:text-gray-800 dark:hover:text-white dark:hover:bg-gray-700">
                  <FaUserEdit />
                  <button>
                    <span className="whitespace-nowrap ">My Profile</span>
                  </button>
                </Link>
                <Link to={'/settings'} className="flex items-center w-full justify-start gap-x-2 py-3 px-8 hover:bg-gray-100 hover:text-gray-800 dark:hover:text-white dark:hover:bg-gray-700">
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
        <button className="relative overflow-hidden w-16 bg-gray-100 border dark:border-gray-700 dark:bg-gray-800 flex items-center justify-start py-2 px-4 rounded-full outline-none" onClick={() => toggleTheme()}>
          {/* <span className={` flex items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600`}>
            {theme === "dark" ? <BsSunFill className={"text-xl"} /> : <BiSolidMoon className={"text-xl"} />}
          </span> */}
          <span className={`absolute right-1/2 translate-x-1/2 flex items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 ${theme === "dark" ? "translate-x-1/2" : "-translate-x-20"} transition `}>
            <BsSunFill className={"text-xl"} />
          </span>
          <span className={`absolute right-1/2 translate-x-1/2 flex items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 ${theme === "light" ? "translate-x-1/2" : "translate-x-20"} transition `}>
            <BiSolidMoon className={"text-xl"} />
          </span>
        </button>

      </div>
    </div>
  )
}

export default Navbar