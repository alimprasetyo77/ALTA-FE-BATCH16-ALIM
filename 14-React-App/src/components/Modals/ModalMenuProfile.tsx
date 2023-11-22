import { BiLogOut, BiSun } from "react-icons/bi"
import { useToken } from "../../utils/contexts/token"
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import useTheme from "../../utils/hooks/useTheme";
import { Link } from "react-router-dom";

interface props {
  closeModal: () => void
  active: boolean
}
type Theme = "light" | "dark";
const ModalMenuProfile = ({ closeModal, active }: props) => {
  const { user } = useToken()
  const { toggleTheme } = useTheme()
  const [themeIsOpen, setThemeIsOpen] = useState(true)

  const setTheme = (str: Theme) => {
    toggleTheme(str)
    closeModal()
  }

  const logout = () => {
    closeModal()
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <>
      <div className={`${!active ? "hidden" : ""}fixed inset-0 z-20`} onClick={closeModal}></div>
      <div className={`w-[400px] absolute right-10 top-20 bg-[#e9eef6] dark:bg-gray-900 dark:border-gray-800 border shadow-lg z-50 rounded-xl pt-4 pb-6 px-4 font-Montserrat ${!active ? "hidden" : ""}`}>
        <div className="relative flex flex-col items-center gap-y-6 ">
          <div className="flex text-gray-700 dark:text-gray-200">
            <span className="font-medium text-sm ">{user.email}</span>
            <button className="absolute -top-1 right-0 text-xl font-semibold p-1 rounded-full hover:bg-[#cccccd] dark:hover:bg-gray-700" onClick={closeModal}><IoMdClose /></button>
          </div>
          <img src={user.profile_picture} alt="profile" className="w-28 h-28 rounded-full" />
          <h2 className="text-xl font-medium dark:text-white">Halo, {user.full_name}.</h2>
          <Link to={"/my-profile"} className="w-1/2">
            <button className="border text-[#0b57d0] dark:bg-gray-200 dark:text-gray-900 p-2 rounded-full font-medium text-sm border-[#7b7e7c] w-full">Kelola Akun</button>
          </Link>
          <div className="flex flex-col  bg-[#f8fafd] dark:bg-gray-800 rounded-3xl w-full overflow-hidden font-medium text-sm">
            <button className="text-start text-[#2a2a2a] dark:text-white hover:bg-[#dce1e8] dark:hover:bg-gray-700 py-4 px-8 flex items-center justify-between " onClick={() => setThemeIsOpen(!themeIsOpen)}>Change Theme <IoIosArrowDown className={"w-8 h-8 border rounded-full p-2 bg-[#e9eef6] dark:bg-gray-700 dark:border-gray-600"} /></button>
            {!themeIsOpen &&
              <>
                <button className="text-start text-[#2a2a2a] dark:text-white hover:bg-[#dce1e8] dark:hover:bg-gray-700 py-4 px-8 flex items-center gap-x-4" onClick={() => {
                  setTheme("light"),
                    setThemeIsOpen(true);
                }}> <BiSun className={" text-lg"} /> Light</button>
                <button className="text-start text-[#2a2a2a] dark:text-white hover:bg-[#dce1e8] dark:hover:bg-gray-700 py-4 px-8 flex items-center gap-x-4" onClick={() => {
                  setTheme("dark"),
                    setThemeIsOpen(true);
                }}><BsMoonFill className={" text-lg"} /> Dark</button>
              </>}

            <button className="text-start text-[#2a2a2a] dark:text-white hover:bg-[#dce1e8] dark:hover:bg-gray-700 py-4 px-8 flex items-center gap-x-4" onClick={logout}><BiLogOut className={"rotate-180 text-2xl"} /> Logout</button>
          </div>
        </div>
      </div></>
  )
}

export default ModalMenuProfile