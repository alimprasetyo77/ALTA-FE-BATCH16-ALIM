import { BiSolidDashboard } from 'react-icons/bi'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs"
import { FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useToken } from '../utils/contexts/token'
import { useEffect, useState } from 'react'


const SideBar = () => {
  const { token, user } = useToken()
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Inisialisasi dan tambahkan event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Membersihkan event listener pada saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={`${isSidebarOpen ? "w-64 left-0" : "w-10 -left-10 "} transition-all border flex flex-col flex-shrink-0 gap-y-4 bg-white min-h-screen p-4 dark:bg-gray-900 dark:text-white dark:border-gray-700 relative z-10 `} >

        <button onClick={toggleSidebar} className={`p-2 absolute top-96 -right-10 bg-white  rotate-45 rounded-xl `}><MdOutlineArrowBackIosNew className={`${!isSidebarOpen ? "rotate-[135deg]" : "-rotate-45"} `} />
        </button>

        {isSidebarOpen &&
          <>
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
              </>
              :
              null
            }
          </>
        }

      </div>
    </>
  )
}

export default SideBar