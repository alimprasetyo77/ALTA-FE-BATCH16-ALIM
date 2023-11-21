import { Link } from "react-router-dom"
import { Book } from "../utils/apis/books"

interface props {
  data: Book
}
const CardBook = ({ data }: props) => {
  return (
    <Link to={`/detail-book/${data.id}`} className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-md shadow-sm space-y-3 overflow-hidden cursor-pointer" >
      <img src={data.cover_image} alt="image" className="aspect-square[3/4]" />
      <div className="flex flex-col items-center py-2 text-center">
        <span className="text-xl font-bold dark:text-white">{data.title}</span>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.author}</p>
      </div>
    </Link>
  )
}

export default CardBook