import Layout from "../../components/Layout"
import { BiSearch } from "react-icons/bi"
import CardBook from "../../components/CardBook"
import ListBookAdmin from "../admin/ListBook"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Book, getBooks } from "../../utils/apis/books"

const Books = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("role"))
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await getBooks()
      setBooks(result.payload.datas)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout height="min-h-screen">
      {isLogin !== "admin" ?

        <div className="py-16 px-32 w-full space-y-8">
          <div className="border bg-white rounded ">
            <div className="flex justify-between items-center px-5 border-b">
              <input type="search" className="px-4 py-8 w-full outline-none" placeholder="Find books ?" />
              <BiSearch class={"text-xl cursor-pointer"} />
            </div>

          </div>
          <div className="grid grid-cols-4 gap-10">
            {books.map(book => (
              <Link to={"/detail-book"} >
                <CardBook key={book.id} data={book} />
              </Link>
            ))}
          </div>
        </div>
        :
        <ListBookAdmin />
      }
    </Layout>
  )
}

export default Books