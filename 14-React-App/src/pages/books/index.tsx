import Layout from "../../components/Layout"
import { BiSearch } from "react-icons/bi"
import CardBook from "../../components/CardBook"
import { useEffect, useState } from "react"
import { Book, getBooks } from "../../utils/apis/books"

const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  // const [searchValue, setSearchValue] = useState("")
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

  // const handleSearch = (e: { preventDefault: () => void }) => {
  //   e.preventDefault()
  //   const filter = books.filter(value => value.title.includes(searchValue.toLowerCase()))
  //   console.log(filter)
  // }
  return (
    <Layout>
      <div className="py-16 px-32 w-full space-y-8">
        <form className="border dark:border-gray-800 bg-white  rounded-lg overflow-hidden flex items-stretch">
          <input type="search" className="px-8 py-8 w-full outline-none dark:bg-gray-900 dark:text-white" placeholder="Find books ?" />
          <button className="w-16 bg-white flex items-center justify-center cursor-pointer">
            <BiSearch class={"text-xl "} />
          </button>
        </form>
        <div className="grid grid-cols-4 gap-10">
          {books.map(book => (
            <CardBook key={book.id} data={book} />
          ))}
        </div>
      </div>

    </Layout>
  )
}

export default Books