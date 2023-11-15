import TableBooks from "../../components/TableBooks"

const ListBook = () => {
  return (
    <>
      <div className="flex justify-end">
        <button className="py-3 px-6 rounded outline-none bg-teal-500 text-white font-semibold text-sm hover:opacity-80 transition duration-200">Add a Book</button>
      </div>
      <TableBooks />
    </>
  )
}

export default ListBook