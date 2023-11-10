import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { getDetailBook } from "../../utils/apis/books/api"
import { useParams } from "react-router-dom"

const DetailBook = () => {
  const [book, setBook] = useState<any>([])
  const { id }: any = useParams()

  useEffect(() => {
    getBook(id)
  }, [])

  const getBook = async (param: string) => {
    try {
      const result = await getDetailBook(param)
      setBook(result.payload)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="p-8 flex-grow">
        <div className="bg-white rounded border shadow-sm flex gap-2 justify-center p-5">
          <div className="w-1/3 flex flex-col items-center p-4 gap-y-8">
            <img src={`${book.cover_image}`} alt="book" className="aspect-square object-scale-down" />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-4 gap-y-8">
            <h1 className="font-semibold text-4xl font-Montserrat">{book.title}</h1>
            <h3 className="text-gray-500 font-semibold text-lg">{book.category}</h3>
            <p className="text-gray-900 tracking-wide text-base ">{book.description}</p>
            <div className="w-1/5 border rounded px-12 py-2 border-gray-300 shadow-sm flex flex-col items-center ">
              <span className="text-sm text-gray-500 whitespace-nowrap">Author</span>
              <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{book.author}</span>
            </div>
            <button className="w-1/4 px-10 py-3 rounded bg-sky-400 text-white font-semibold text-sm">Borrow</button>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBook