import { deleteBorrow } from '../../utils/apis/borrow/api'
interface props {
  isOpen?: boolean
  closeModal: () => void
  id?: string
}
const ModalDeleteBorrow = ({ isOpen, closeModal, id }: props) => {
  const handleDelete = async () => {
    try {
      const result = await deleteBorrow(id as string)
      alert(result.message)
      closeModal()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className={`fixed inset-0 bg-black/40 ${!isOpen && "hidden"} `}>
      <div className={`absolute top-72 right-1/2  translate-x-1/2 bg-white dark:bg-gray-900 dark:border-gray-800 border rounded-lg shadow-lg p-4 ${!isOpen ? "hidden" : ""}`}>
        <div className="flex flex-col items-start gap-y-4 dark:text-gray-200">
          <h3 className="font-bold text-gray-700 dark:text-gray-100 text-lg">Are you sure?</h3>
          <p className="tracking-wider ">This action cannot be undone. This will permanently delete the borrow data.</p>
          <div className="flex items-center justify-end w-full gap-x-2">
            <button className="font-semibold px-4 py-2 border dark:border-gray-700 rounded-md bg-gray-400 dark:bg-gray-800 text-white hover:bg-gray-500 dark:hover:bg-gray-900 transition" onClick={closeModal}>Cancel</button>
            <button className="font-semibold px-4 py-2 border dark:border-gray-700 rounded-md bg-rose-400 dark:bg-rose-600 text-white hover:bg-rose-500 dark:hover:bg-rose-700 transition" onClick={handleDelete}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDeleteBorrow