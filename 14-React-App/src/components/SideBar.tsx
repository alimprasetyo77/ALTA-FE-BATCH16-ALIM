import { useState } from 'react'
import { BsArrowLeftCircleFill, BsFillBookFill } from "react-icons/bs"
import { FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const SideBar = () => {
  const [activeSideBar, setActiveSideBar] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("role"))

  return (
    <div className={`border  flex flex-col flex-shrink-0 gap-y-4  bg-white relative ${activeSideBar ? "w-64 " : "w-20 py-3 px-4 items-center"} transition-all duration-200 ease-out min-h-screen`}>
      <Link to={"/list-books"} className={` hover:bg-gray-100 py-6 px-8`}>
        <span className='flex items-center gap-x-4 cursor-pointer font-medium'><BsFillBookFill />{activeSideBar ? "List of Books" : " "}</span>
      </Link>

      {isLogin ?
        <Link to={"/history"} className={` hover:bg-gray-100  py-6 px-8`}>
          <span className='flex items-center gap-x-4 cursor-pointer font-medium'><FaHistory />{activeSideBar ? "History Borrow" : " "}</span>
        </Link>
        :
        null
      }
      <button onClick={() => setActiveSideBar(!activeSideBar)} className={`text-2xl text-gray-500 absolute right-7 bottom-5  ${activeSideBar ? "rotate-0" : "rotate-180"}`}> <BsArrowLeftCircleFill /> </button>
    </div>
  )
}

export default SideBar