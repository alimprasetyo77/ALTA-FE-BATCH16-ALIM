import TableBook from "../../components/TableBook"

const ListBook = () => {
  return (
    <div className="p-16 mx-auto container">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-semibold text-4xl  text-gray-700">Books </h1>
        <button className="py-3 px-6 rounded outline-none bg-teal-500 text-white font-semibold text-sm hover:opacity-80 transition duration-200">Add a Book</button>
      </div>
      <TableBook borrowNameActive={false} />
    </div>
  )
}

export default ListBook