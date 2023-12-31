import Layout from "../../components/Layout"
import { BiSearch } from "react-icons/bi"
import CardBook from "../../components/CardBook"
import { useEffect, useState } from "react"
import { Book, getBooks } from "../../utils/apis/books"

const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState<Book[]>([])
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
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!searchValue) return alert("Please enter the keywords!")
    const query = searchValue.replace(/\s/g, "").toLowerCase()
    const filter = books.filter(value => {
      const updateValue = value.title.replace(/\s/g, "").toLowerCase()
      return updateValue.includes(query)
    })
    setFilteredData(filter)
    if (filter.length <= 0) {
      alert("Data not found!")
      setSearchValue("")
    }
  }
  return (
    <Layout>
      <div className="py-16 px-32 w-full space-y-8">
        <form onSubmit={handleSearch} className="border dark:border-gray-700 bg-white  rounded-lg overflow-hidden flex items-stretch">
          <input type="search" className="px-8 py-8 w-full outline-none dark:bg-gray-900 dark:text-white text-lg" placeholder="Enter the book title" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button className="w-16 bg-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 flex items-center justify-center cursor-pointer">
            <BiSearch class={"text-xl "} />
          </button>
        </form>
        <div className="grid grid-cols-4 gap-10">
          {filteredData.length > 0 ? filteredData.map(data => (
            <CardBook key={data.id} data={data} />
          ))
            :
            books.map(data => (
              <CardBook key={data.id} data={data} />
            ))
          }

        </div>
      </div>

    </Layout>
  )
}

export default Books