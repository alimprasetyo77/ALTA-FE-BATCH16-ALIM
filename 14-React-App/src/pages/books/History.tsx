/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import ListBooks from "../admin/ListBook"
import TableBorrows from "../../components/TableBorrows"
import { getProfile } from "../../utils/apis/users"

const History = () => {
  const [link, setLink] = useState(true)
  const [role, setRole] = useState('')

  useEffect(() => {
    getRole()
  }, [])

  const getRole = async () => {
    try {
      const result = await getProfile()
      setRole(result.payload.role)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Layout>
      {role === "admin" ?

        <div className="p-16 mx-auto container space-y-10">
          <div className="w-[200px]  mx-auto border border-gray-300 bg-white rounded-lg text-sm font-semibold flex justify-center py-1 px-3">
            <button className={`${link ? "bg-teal-500 border text-white" : "bg-white border-none text-black/70"} py-2 px-5 rounded-md`} onClick={() => setLink(true)} >
              Books
            </button>
            <button className={`${!link ? "bg-teal-500 border text-white" : "bg-white border-none text-black/70"} py-2 px-5 rounded-md`} onClick={() => setLink(false)}>
              Borrows
            </button>
          </div>
          {link ? <ListBooks /> : <TableBorrows />}

        </div>

        :
        <div className="p-16 mx-auto container space-y-10">

          <TableBorrows />
        </div>
      }

    </Layout>
  )
}

export default History