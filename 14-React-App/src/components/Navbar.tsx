import { useState } from "react"
import { Link } from "react-router-dom"
import { useToken } from "../utils/contexts/token"
import ModalMenuProfile from "./Modals/ModalMenuProfile"
import { FaShoppingCart } from "react-icons/fa";
import CartSheet from "./CartSheet";
import useCartStore from "../utils/state";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import useTheme from "../utils/hooks/useTheme";

const Navbar = () => {
  const { cart } = useCartStore()
  const { toggleTheme, theme } = useTheme()
  const [active, setActive] = useState(false)
  const [cartSheetActive, setCartSheetActive] = useState(false)
  const { user, token } = useToken()

  const closeModal = () => {
    setActive(false)
  }
  const closeSheetCart = () => {
    setCartSheetActive(false)
  }
  return (
    <>
      <CartSheet closeSheet={closeSheetCart} active={cartSheetActive} />
      <ModalMenuProfile closeModal={closeModal} active={active} />

      <div className="w-full px-10 py-4 border-b flex justify-between items-center h-20 dark:bg-gray-900 dark:text-white dark:border-gray-700 ">
        <Link to={"/"} className="flex gap-2 items-center">
          <img width="48" height="48" src="../images/book.png" alt="open-book" />
          <h3 className="font-semibold text-xl font-Montserrat ">LibraryApp</h3>
        </Link>
        <div className="flex items-center gap-x-3 ">
          {token ?
            <>
              {user.role === "user" &&
                <button className="w-14 h-14 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative " onClick={() => setCartSheetActive(!cartSheetActive)}>
                  <FaShoppingCart className={"text-[22px] text-gray-700 dark:text-gray-100 "} />
                  <div className="text-xs font-medium font-Montserrat absolute top-2 right-2 flex items-center justify-center bg-gray-100 dark:bg-white w-4 rounded-full border">
                    <span className="text-gray-900  font-semibold ">{cart.length}</span>
                  </div>
                </button>
              }

              <div className="flex items-center gap-x-2 relative cursor-pointer " onClick={() => setActive(!active)}>
                <div className="flex items-center gap-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200 rounded-lg p-3">
                  <img src={user.profile_picture} alt="profile" className="w-10 h-10 rounded-full border-2 border-black/30 dark:border-gray-400" />
                </div>
              </div>
            </>
            :
            <div className="flex items-center gap-x-5 text-white">
              <Link to={'/login'}>
                <button className="px-4 py-2 bg-gray-500 dark:bg-white dark:text-gray-900 rounded text-sm font-medium hover:bg-sky-500 dark:hover:bg-gray-200  duration-200">Login</button>
              </Link>
              <Link to={'/register'}>
                <button className="px-4 py-2 bg-gray-500 dark:bg-white dark:text-gray-900 rounded text-sm font-medium hover:bg-red-500 dark:hover:bg-gray-200  duration-200">Register</button>
              </Link>
              <button className="overflow-hidden w-10 h-10 bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-700 rounded-full relative outline-none" onClick={() => (toggleTheme())} >
                <BsSunFill className={`absolute right-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === "dark" ? "top-1/2" : "top-[200%]"} `} />
                <BsMoonFill className={`absolute right-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === "light" ? "top-1/2" : "top-[200%]"}`} />
              </button>
            </div>}
        </div>
      </div>
    </>
  )
}

export default Navbar