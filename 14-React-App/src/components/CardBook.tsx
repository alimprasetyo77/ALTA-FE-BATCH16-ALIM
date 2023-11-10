import { Link } from "react-router-dom"
import { Book } from "../utils/apis/books"

interface props {
  data: Book
}
const CardBook = ({ data }: props) => {
  return (
    <Link to={`/detail-book/${data.id}`} className="bg-white border rounded-md shadow-sm space-y-3 overflow-hidden cursor-pointer" >
      <img src={data.cover_image} alt="" className="aspect-square[3/4]" />
      <div className="flex flex-col items-center py-2 text-center">
        <span className="text-xl font-bold">{data.title}</span>
        <p className="text-sm text-gray-500">{data.author}</p>
      </div>
    </Link>
  )
}

export default CardBook