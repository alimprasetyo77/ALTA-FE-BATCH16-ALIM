/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaTrashAlt } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import useCartStore from "../utils/state"
import { createBorrow } from "../utils/apis/borrow/api"
import { errorToast, successToast } from "../utils/toast"

interface props {
  closeSheet: () => void,
  active: boolean
}

const CartSheet = ({ closeSheet, active }: props) => {
  const { cart, deleteBook, removeCart } = useCartStore()

  const handleBorrow = async () => {
    const data = {
      bookId: cart.map(data => data.id),
      borrow_date: new Date()
    }
    try {
      const result = await createBorrow(data)
      successToast(result.message)
      removeCart()
    } catch (error: any) {
      errorToast(error.toString())
    }
  }

  return (
    <>
      <div className={`${!active ? "hidden" : ""}fixed inset-0 bg-black/20 z-20 `} onClick={closeSheet}></div>
      <div className={`${!active ? " -right-[100%]" : " right-0"} w-[420px] transition-all duration-300 fixed top-0 bottom-0 bg-white dark:bg-gray-900 dark:border-gray-700 border shadow-lg z-30 p-4  space-y-8`}>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white font-Montserrat">You Cart</h2>
            <button className="text-xl dark:text-white" onClick={closeSheet}><IoMdClose /></button>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-200">Due date is 7 days after you click borrow.</p>
        </div>
        <div className="flex flex-col items-start gap-y-8">
          {cart.length <= 0 && <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 font-Montserrat font-medium text-base">No book in the cart.</div>}

          {cart.map((data) => (
            <div className="flex gap-x-4 items-center w-full">
              <img src={data.cover_image} className="rounded-lg h-32 w-24" alt="Books" />
              <span className="grow dark:text-gray-200">{data.title}</span>
              <button onClick={() => deleteBook(data)}><FaTrashAlt className={"text-rose-500"} /></button>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-11/12 bg-gray-700 text-white font-semibold font-Montserrat rounded-lg overflow-hidden text-sm ">
          <button className="w-full bg-teal-500 py-2 px-4" hidden={cart.length <= 0} onClick={handleBorrow} >Borrow</button>
        </div>
      </div>
    </>
  )
}

export default CartSheet