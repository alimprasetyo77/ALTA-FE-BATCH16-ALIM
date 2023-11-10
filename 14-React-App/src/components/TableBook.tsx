import { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'
import { getBooksBorrow, getProfile } from '../utils/apis/users/api'
import { Borrow } from '../utils/apis/users/types'

interface props {
  borrowNameActive: boolean
}

const TableBook = ({ borrowNameActive }: props) => {
  console.log(borrowNameActive)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("role"))
  const [bookBorrows, setBookBorrows] = useState<Borrow[]>([])
  const [role, setRole] = useState<string>()
  useEffect(() => {
    fetchBorrows()
  }, [])


  const fetchBorrows = async () => {
    try {
      const result = await getBooksBorrow()
      const dataRole = await getProfile()
      setBookBorrows(result.payload.datas)
      setRole(dataRole.payload.role)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <table className="table-auto w-full text-left bg-white rounded shadow-sm">
        <thead className="text-xl">
          <tr>
            <th className="px-6 py-4 border-r">Book</th>
            <th className="px-6 py-4 border-r">Borrow Date</th>
            <th className="px-6 py-4 border-r">Due Date</th>
            {borrowNameActive && <th className="px-6 py-4 border-r">Borrow Name</th>}
            {role === "admin" ? <th className="px-6 py-4">Action</th> : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-lg">{ }
          {bookBorrows.map((data) => (
            <tr key={data.id}>
              <td className="border border-l-0 px-6 py-4 flex items-center gap-x-4">
                <img src={data.book.cover_image} className='w-20' alt="book" />
                <span>{data.book.title}</span>
              </td>
              <td className="border border-l-0 border-r px-6 py-4">{data.borrow_date.slice(0, 10)}</td>
              <td className="border border-l-0 border-r px-6 py-4">{data.due_date.slice(0, 10)}</td>
              {role === "admin" ?
                <>
                  {borrowNameActive && <td className="border border-l-0 border-r px-6 py-4">{data.user.full_name}</td>}
                  <td className="border border-l-0 border-r-0 px-6 py-4 ">
                    <div className="flex justify-center gap-x-8 text-xl">
                      <BiEdit className={"text-green-700 cursor-pointer "} />
                      <BsTrashFill className={"text-rose-700 cursor-pointer"} />
                    </div>
                  </td>
                </> : null
              }
            </tr>
          ))}
          {/* <tr>
            <td className="border border-l-0 px-6 py-4">Apple iPhone 8.</td>
            <td className="border border-l-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer"} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />

                </div>
              </td> : null
            }
          </tr>
          <tr>
            <td className="border border-l-0 px-6 py-4">Apple MacBook Pro.</td>
            <td className="border border-l-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer"} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />

                </div>
              </td> : null
            }
          </tr>
          <tr>
            <td className="border border-l-0 px-6 py-4">Samsung Galaxy S9.</td>
            <td className="border border-l-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer"} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />

                </div>
              </td> : null
            }
          </tr>
          <tr>
            <td className="border border-l-0 px-6 py-4">Samsung Galaxy S8 256GB.</td>
            <td className="border border-l-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer"} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />

                </div>
              </td> : null
            }
          </tr>
          <tr>
            <td className="border border-l-0 border-b-0 px-6 py-4">apple watch.</td>
            <td className="border border-l-0 border-b-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 border-b-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer"} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />

                </div>
              </td> : null
            }
          </tr> */}

        </tbody>
      </table>
    </div>
  )
}

export default TableBook