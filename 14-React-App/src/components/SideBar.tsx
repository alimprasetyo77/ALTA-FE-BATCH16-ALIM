// import { useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { BsFillBookFill } from "react-icons/bs"
import { FaHistory } from 'react-icons/fa'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useToken } from '../utils/contexts/token'


const SideBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLogin, _] = useState(localStorage.getItem("token"))
  const { token, user } = useToken()
  const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }
  return (
    <div className={`border flex flex-col flex-shrink-0 gap-y-4 bg-white min-h-screen w-64 p-4 dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
      <Link to={"/list-books"} className={` hover:bg-gray-100 dark:hover:bg-gray-700 py-6 px-8 duration-200 font-Montserrat rounded-lg `} title='List of Books'>
        <span className={`flex items-center gap-x-4 cursor-pointer font-medium`}><BsFillBookFill className={"text-lg text-gray-900 dark:text-gray-50"} />List Books</span>
      </Link>
      {token ?
        <>
          {user.role === "admin" ?
            <Link to={"/dashboard"} className={` hover:bg-gray-100 dark:hover:bg-gray-700  py-6 px-8 duration-200 font-Montserrat rounded-lg`} title='History Borrow'>
              <span className={`flex items-center gap-x-4 cursor-pointer font-medium`}><BiSolidDashboard className={"text-lg text-gray-900 dark:text-gray-50"} />Dashboard</span>
            </Link>
            :
            <Link to={"/history-borrow"} className={` hover:bg-gray-100 dark:hover:bg-gray-700  py-6 px-8 duration-200 font-Montserrat rounded-lg`} title='History Borrow'>
              <span className={`flex items-center gap-x-4 cursor-pointer font-medium`}><FaHistory className={"text-lg text-gray-900 dark:text-gray-50"} />History Borrow</span>
            </Link>
          }

          <hr className='dark:border-gray-700 ' />
          <Link to={'/'} className={`flex items-center gap-x-4 cursor-pointer font-medium hover:bg-gray-100 dark:hover:bg-gray-700  py-6 px-8 duration-200 font-Montserrat rounded-lg`} onClick={logout}>
            <RiLogoutCircleRLine />
            <button>Log Out</button>
          </Link>
        </>
        :
        null
      }

    </div>
  )
}

export default SideBar