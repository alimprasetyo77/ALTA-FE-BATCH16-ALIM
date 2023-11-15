/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import CardBook from "../components/CardBook"
import { BiSitemap } from "react-icons/bi"
import { BsFillCartDashFill, BsPersonFill } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { Book, getBooks } from "../utils/apis/books"

const index = () => {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await getBooks()
      setBooks(result.payload.datas.slice(0, 5))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout >
      <div className="w-full flex flex-col items-center justify-around gap-0 py-8 px-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="flex flex-col gap-y-5 bg-white py-5 px-10 rounded-sm border shadow justify-center hover:shadow-lg  hover:scale-105 transform duration-300">
            <BsFillCartDashFill class={"text-2xl text-indigo-700"} />
            <span className="text-4xl font-semibold">{Math.floor(Math.random() * 1000)}</span>
            <p className="font-mono font-medium text-gray-500 ">Book Borrow</p>
          </div>
          <div className="flex flex-col gap-y-5 bg-white py-5 px-10 rounded-sm border shadow justify-center hover:shadow-lg  hover:scale-105 transform duration-300">
            <BiSitemap class={"text-2xl text-yellow-700"} />
            <span className="text-4xl font-semibold">{Math.floor(Math.random() * 1000)}</span>
            <p className="font-mono font-medium text-gray-500">Total book</p>
          </div>
          <div className="flex flex-col gap-y-5 bg-white py-5 px-10 rounded-sm border shadow justify-center hover:shadow-lg  hover:scale-105 transform duration-300">
            <FaUsers class={"text-2xl text-green-700"} />
            <span className="text-4xl font-semibold">{Math.floor(Math.random() * 10000)}</span>
            <p className="font-mono font-medium text-gray-500">Visitor</p>
          </div>
          <div className="flex flex-col gap-y-5 bg-white py-5 px-10 rounded-sm border shadow justify-center hover:shadow-lg  hover:scale-105 transform duration-300">
            <BsPersonFill class={"text-2xl text-rose-700"} />
            <span className="text-4xl font-semibold">{Math.floor(Math.random() * 1000)}</span>
            <p className="font-mono font-medium text-gray-500">Members</p>
          </div>

        </div>
        <div className="container">
          <h1 className="text-3xl font-bold mb-6 text-gray-700">New Release Books</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {books.map(book => (
              <CardBook key={book.id} data={book} />
            ))}

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default index