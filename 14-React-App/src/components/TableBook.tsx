import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'

const TableBook = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("role"))

  return (
    <div>
      <table className="table-auto w-full text-left bg-white rounded shadow-sm">
        <thead className="text-xl">
          <tr>
            <th className="px-6 py-4 border-r">Book</th>
            <th className="px-6 py-4 border-r">Date</th>
            {isLogin === "admin" ? <th className="px-6 py-4">Action</th> : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-lg">
          <tr>
            <td className="border border-l-0 px-6 py-4">Lightning to USB-C Adapter Lightning.</td>
            <td className="border border-l-0 border-r px-6 py-4">9/11/2023</td>
            {isLogin === "admin" ?
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8">
                  <BiEdit className={"text-green-700 cursor-pointer "} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />
                </div>
              </td> : null
            }
          </tr>
          <tr>
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
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default TableBook