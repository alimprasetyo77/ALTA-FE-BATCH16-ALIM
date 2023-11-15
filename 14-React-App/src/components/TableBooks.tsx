import { BiEdit } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'
import { Book, getBooks } from '../utils/apis/books'
import { useEffect, useState } from 'react'



const TableBook = () => {
  const [books, setBooks] = useState<Book[]>()
  useEffect(() => {
    fetchBooks()
  }, [])
  const fetchBooks = async () => {
    try {
      const result = await getBooks()
      setBooks(result.payload.datas)
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
            <th className="px-6 py-4 border-r">Title</th>
            <th className="px-6 py-4 border-r">Author</th>
            <th className="px-6 py-4 border-r">Category</th>
            <th className="px-6 py-4 border-r">ISBN</th>
            <th className="px-6 py-4 border-r">Featured</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-base">{ }
          {books?.map((data, index) => (
            <tr key={data.id}>
              <td className="border border-l-0 border-r px-6 py-4 text-center">{index + 1}</td>
              <td className="border border-l-0 border-r px-6 py-4">{data.title}</td>
              <td className="border border-l-0 px-6 py-4 flex items-center gap-x-4"><span>{data.author}</span>
              </td>
              <td className="border border-l-0 border-r px-6 py-4">{data.category}</td>
              <td className="border border-l-0 border-r px-6 py-4">{data.isbn}</td>
              <td className="border border-l-0 border-r px-6 py-4">{data.featured ? "true" : "false"}</td>
              <td className="border border-l-0 border-r-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8 text-xl">
                  <BiEdit className={"text-green-700 cursor-pointer "} />
                  <BsTrashFill className={"text-rose-700 cursor-pointer"} />
                </div>
              </td>

            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default TableBook