import { useState } from "react"
import ModalAddBook from "./Modals/ModalAddBook"
import TableBooks from "./Tables/TableBooks"

const ListBook = () => {
  const [modalActive, setModalActive] = useState(false)

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };
  return (

    <div>
      <div className={`fixed inset-0 bg-black/40 ${!modalActive ? "hidden" : ""} z-10`} onClick={closeModal}>
      </div>
      <ModalAddBook isOpen={modalActive} closeModal={closeModal} />
      <div className="flex justify-end mb-10">
        <button className="py-3 px-6 rounded outline-none bg-gray-500 dark:bg-gray-100 dark:text-gray-900 text-white font-semibold text-sm hover:opacity-80 transition duration-200" onClick={openModal}>Add a Book</button>
      </div>
      <TableBooks />
    </div>

  )
}

export default ListBook