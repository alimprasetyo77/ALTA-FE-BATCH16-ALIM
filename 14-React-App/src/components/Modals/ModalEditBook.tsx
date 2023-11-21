import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Book, CreateBookSchema, createBookSchema } from "../../utils/apis/books/types"
import { getDetailBook, updateBook } from "../../utils/apis/books"
import { FaSpinner } from "react-icons/fa"
import { useEffect, useState } from "react"

interface props {
  isOpen?: boolean
  closeModal: () => void;
  id?: string
}

const ModalEditBook = ({ isOpen, closeModal, id }: props) => {
  const categories = ["Fiction", "Fantasy", "Mystery", "Romance", "Science", "History", "Business", "Children", "Thriller", "Biography", "Religion", "CookBooks", "Horror", "Psychology"]

  const [book, setBook] = useState<Book>()


  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      title: "",
      author: "",
      cover_image: "",
      isbn: "",
      category: "",
      description: ""
    }
  })

  useEffect(() => {
    if (id) {
      getBook()
    }
  }, [id])

  useEffect(() => {
    if (book) {
      reset({
        title: book?.title,
        author: book?.author,
        cover_image: book?.cover_image,
        isbn: book?.isbn,
        category: book?.category,
        description: book?.description
      })
    }
  }, [book])

  const getBook = async () => {
    try {
      const result = await getDetailBook(id as string)
      setBook(result.payload)
    } catch (error) {
      alert(error)
    }
  }


  const onSumbit = async (data: CreateBookSchema) => {
    try {
      const result = await updateBook(id!, data)
      alert(result.message)
      closeModal()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className={`border shadow-md w-[600px] fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 p-6 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-xl z-20 ${!isOpen ? "hidden" : ""}`}>
      <div className="flex items-center justify-between text-gray-700 dark:text-white mb-4">
        <h3 className="font-bold text-xl">Edit a Book</h3>
        <button className="outline-none border-none hover:bg-gray-100 rounded-full font-bold text-xl px-2 transition" onClick={closeModal}>x</button>
      </div>
      <form className="flex flex-col text-gray-600 dark:text-white" onSubmit={handleSubmit(onSumbit)}>
        <label htmlFor="title" className="font-semibold">Title</label>
        <input type="text" id="title" placeholder="Title book" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6"{...register("title")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.title?.message && <p className="text-red-500 text-sm -mt-5">{errors.title.message}</p>}


        <label htmlFor="image">Cover Image</label>
        <input type="file" id="image" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6" {...register("cover_image")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.cover_image?.message && <p className="text-red-500 text-sm -mt-5">{errors.cover_image.message}</p>}

        <label htmlFor="author" className="font-semibold">Author</label>
        <input type="text" id="author" placeholder="Author" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6" {...register("author")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.author?.message && <p className="text-red-500 text-sm -mt-5">{errors.author.message}</p>}

        <label htmlFor="isbn" className="font-semibold">ISBN</label>
        <input type="text" id="isbn" placeholder="isbn" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6" {...register("isbn")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.isbn?.message && <p className="text-red-500 text-sm -mt-5">{errors.isbn.message}</p>}

        <label htmlFor="category" className="font-semibold">Category</label>
        <select id="category" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6" {...register("category")} disabled={isSubmitting} aria-disabled={isSubmitting} >
          <option selected disabled hidden >Select a Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat} >{cat}</option>
          ))}
        </select>
        {errors.category?.message && <p className="text-red-500 text-sm -mt-5">{errors.category.message}</p>}

        <label htmlFor="description" className="font-semibold">Description</label>
        <textarea id="description" placeholder="description" className="border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-50 placeholder:text-gray-500 outline-none mb-6 " {...register("description")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.description?.message && <p className="text-red-500 text-sm -mt-5">{errors.description.message}</p>}

        <button className="border py-3 font-semibold bg-sky-400 dark:bg-white dark:text-gray-900 rounded-md text-white disabled:bg-sky-300 flex justify-center " disabled={isSubmitting} aria-disabled={isSubmitting}>{isSubmitting ? <FaSpinner className={"animate-spin text-2xl"} /> : "Save changes"}</button>

      </form>
    </div >
  )
}

export default ModalEditBook