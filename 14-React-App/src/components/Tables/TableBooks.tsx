import { BiEdit } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'
import { Book, getBooks } from '../../utils/apis/books'
import { useEffect, useState } from 'react'
import ModalEditBook from '../Modals/ModalEditBook'
import ModalDeleteBook from '../Modals/ModalDeleteBook'
const TableBook = () => {
  const [books, setBooks] = useState<Book[]>()
  const [modalAddBook, setModalAddBook] = useState(false)
  const [modalDeleteBook, setModalDeleteBook] = useState(false)
  const [titleBook, setTitleBook] = useState("")
  const [id, setId] = useState<string>()

  const openModalAddBook = (id: string) => {
    setId(id)
    setModalAddBook(true);
  };

  const closeModalAddBook = () => {
    setModalAddBook(false);
  };

  const openDelete = (id: string, titleBook: string) => {
    setTitleBook(titleBook)
    setId(id)
    setModalDeleteBook(true)
  }
  const closeDelete = () => {
    setModalDeleteBook(false)
  }

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
      <div className={`fixed inset-0 bg-black/40 ${!modalAddBook ? "hidden" : ""} z-10`} onClick={closeModalAddBook}>
      </div>
      <ModalEditBook id={id} isOpen={modalAddBook} closeModal={closeModalAddBook} />

      <ModalDeleteBook id={id} isOpen={modalDeleteBook} closeModal={closeDelete} titleBook={titleBook} />
      <table className="table-auto w-full text-left bg-white dark:bg-gray-900 rounded-lg shadow-sm dark:shadow-gray-900">
        <thead className="text-gray-800 dark:text-gray-300 text-lg ">
          <tr>
            <th className="px-6 py-4 border-r dark:border-gray-800 text-center">No</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Title</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Author</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Category</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">ISBN</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Featured</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-base dark:text-gray-100">
          {books?.map((data, index) => (
            <tr key={data.id}>
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4 text-center">{index + 1}</td>
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4">{data.title}</td>
              <td className="border dark:border-gray-800 border-l-0 border-b-0 px-6 py-4 flex items-center gap-x-4"><span>{data.author}</span>
              </td>
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4">{data.category}</td>
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4">{data.isbn}</td>
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4">{data.featured ? "true" : "false"}</td>
              <td className="border dark:border-gray-800 border-l-0 border-r-0 border-b-0 px-6 py-4 ">
                <div className="flex justify-center gap-x-8 text-xl">
                  <button onClick={() => openModalAddBook(data.id + "")}>
                    <BiEdit className={"text-green-700 dark:text-green-500 cursor-pointer "} />
                  </button>
                  <button onClick={() => openDelete(data.id + "", data.title)}>
                    <BsTrashFill className={"text-rose-700 dark:text-rose-500 cursor-pointer"} />
                  </button>
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


