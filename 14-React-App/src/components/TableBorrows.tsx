import { useEffect, useState } from 'react'
import { getProfile } from '../utils/apis/users'
import { getBooksBorrow } from '../utils/apis/users/api'
import { Borrow } from '../utils/apis/users/types'
import { BiEdit } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'

const TableBorrows = () => {
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
        <thead className="text-gray-800 text-lg">
          <tr>
            <th className="px-6 py-4 border-r text-center">No</th>
            {role === "admin" ? <th className="px-6 py-4 border-r">User</th> : null}
            <th className="px-6 py-4 border-r">Book</th>
            <th className="px-6 py-4 border-r">Borrow Date</th>
            <th className="px-6 py-4 border-r">Due Date</th>
            {role === "admin" ? <th className="px-6 py-4"></th> : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-base">{ }
          {bookBorrows?.map((data, index) => (
            <tr key={data.id}>
              <td className="border border-l-0 border-r px-6 py-4 text-center">{index + 1}</td>
              {role === "admin" ?
                <td className="border border-l-0 border-r px-6 py-4">{data?.user.full_name}</td> : null
              }
              <td className="border border-l-0 px-6 py-4 flex items-center gap-x-4"><span>{data?.book.title}</span>
              </td>
              <td className="border border-l-0 border-r px-6 py-4">{data?.borrow_date.slice(0, 10)}</td>
              <td className="border border-l-0 border-r px-6 py-4">{data?.due_date.slice(0, 10)}</td>
              {role === "admin" &&
                <td className="border border-l-0 border-r-0 px-6 py-4 ">
                  <div className="flex justify-center gap-x-8 text-xl">
                    <BiEdit className={"text-green-700 cursor-pointer "} />
                    <BsTrashFill className={"text-rose-700 cursor-pointer"} />
                  </div>
                </td>
              }
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default TableBorrows