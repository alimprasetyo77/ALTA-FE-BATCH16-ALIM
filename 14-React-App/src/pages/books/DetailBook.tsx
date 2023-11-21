/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react"
import Layout from "../../components/Layout"
import { getDetailBook } from "../../utils/apis/books/api"
import { useParams } from "react-router-dom"
import { Book } from "../../utils/apis/books"
import { useToken } from "../../utils/contexts/token"
import useCartStore from "../../utils/state"
const DetailBook = () => {
  const { cart, addBook } = useCartStore()
  const [book, setBook] = useState<Book>()
  const { user } = useToken()
  const { id } = useParams()

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === book?.id);

    if (checkCart) return true;

    return false;
  }, [cart]);

  useEffect(() => {
    getBook()
  }, [])

  const getBook = async () => {
    try {
      const result = await getDetailBook(id as string)
      setBook(result.payload)
    } catch (error) {
      console.log(error)
    }
  }

  function onClickBorrow() {
    addBook(book!);
    alert("Book has been added to cart.")
  }
  return (
    <Layout>
      <div className="p-8 grow">
        <div className="bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 rounded-xl border shadow-sm flex flex-col xl:flex-row gap-16 items-center xl:items-start justify-center p-10">
          <img src={`${book?.cover_image}`} alt="book" className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96 " />
          <div className="grow xl:w-1/2 flex flex-col justify-center p-4 gap-y-8">
            <h1 className="font-semibold text-4xl font-Montserrat">{book?.title}</h1>
            <h3 className="text-gray-500 dark:text-white font-semibold text-lg">{book?.category}</h3>
            <p className="text-gray-900 dark:text-white tracking-wide text-base ">{book?.description}</p>
            <div className="w-1/5 border rounded px-12 py-2 border-gray-300 dark:border-gray-600 shadow-sm flex flex-col items-center ">
              <span className="text-sm text-gray-500 dark:text-white whitespace-nowrap">Author</span>
              <span className="text-sm font-semibold text-gray-800 dark:text-white whitespace-nowrap">{book?.author}</span>
            </div>
            {user.role === "user" && <button className="w-1/4 px-10 py-3 rounded bg-sky-400 text-white font-semibold text-sm disabled:cursor-not-allowed" disabled={isInCart} aria-disabled={isInCart} onClick={onClickBorrow}>{isInCart ? "In Cart" : "Borrow"}</button>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBook