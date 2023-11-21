import { useForm } from "react-hook-form"
import { CreateBookSchema, createBookSchema } from "../../utils/apis/books/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBook } from "../../utils/apis/books/api"
import { FaSpinner } from "react-icons/fa"

interface props {
  isOpen?: boolean
  closeModal: () => void

}

const Modal = ({ isOpen, closeModal }: props) => {
  const categories = ["Fiction", "Fantasy", "Mystery", "Romance", "Science", "History", "Business", "Children", "Thriller", "Biography", "Religion", "CookBooks", "Horror", "Psychology"]

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      title: "",
      author: "",
      cover_image: "",
      isbn: "",
      category: "Select a Category",
      description: ""
    }
  })

  const onSumbit = async (data: CreateBookSchema) => {
    try {
      const result = await createBook(data)
      alert(result.message)
      closeModal()
      reset()
    } catch (error) {
      alert(error)
    }
  }
  return (

    <div className={`border shadow-md w-[600px] fixed top-20 right-1/2 translate-x-1/2 p-6 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-xl z-20 ${!isOpen ? "hidden" : ""}`}>
      <div className="flex items-center justify-between text-gray-700 dark:text-white mb-8">
        <h3 className="font-bold text-xl">Add a Book</h3>
        <button className="outline-none border-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full font-bold text-xl px-2 transition" onClick={closeModal}>x</button>
      </div>
      <form className="flex flex-col text-gray-600 dark:text-white" onSubmit={handleSubmit(onSumbit)}>
        <label htmlFor="title" className="font-semibold mb-2">Title</label>
        <input type="text" id="title" placeholder="Title book" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6"{...register("title")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.title?.message && <p className="text-red-500 text-sm -mt-5">{errors.title.message}</p>}


        <label htmlFor="image" className="font-semibold mb-2">Cover Image</label>
        <input type="file" id="image" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6" {...register("cover_image")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.cover_image?.message && <p className="text-red-500 text-sm -mt-5">{errors.cover_image.message}</p>}

        <label htmlFor="author" className="font-semibold mb-2">Author</label>
        <input type="text" id="author" placeholder="Author" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6" {...register("author")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.author?.message && <p className="text-red-500 text-sm -mt-5">{errors.author.message}</p>}

        <label htmlFor="isbn" className="font-semibold mb-2">ISBN</label>
        <input type="text" id="isbn" placeholder="isbn" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6" {...register("isbn")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.isbn?.message && <p className="text-red-500 text-sm -mt-5">{errors.isbn.message}</p>}

        <label htmlFor="category" className="font-semibold mb-2">Category</label>
        <select id="category" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6" {...register("category")} disabled={isSubmitting} aria-disabled={isSubmitting} >
          <option selected disabled hidden >Select a Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat} >{cat}</option>
          ))}
        </select>
        {errors.category?.message && <p className="text-red-500 text-sm -mt-5">{errors.category.message}</p>}

        <label htmlFor="description" className="font-semibold mb-2">Description</label>
        <textarea id="description" placeholder="description" className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:placeholder:text-gray-400 placeholder:text-gray-500 outline-none mb-6 " {...register("description")} disabled={isSubmitting} aria-disabled={isSubmitting} />
        {errors.description?.message && <p className="text-red-500 text-sm -mt-5">{errors.description.message}</p>}

        <button className="border  py-3 font-semibold bg-sky-400 dark:bg-white dark:text-gray-900 rounded-md text-white disabled:bg-sky-300 flex justify-center " disabled={isSubmitting} aria-disabled={isSubmitting}>{isSubmitting ? <FaSpinner className={"animate-spin text-2xl"} /> : "Save changes"}</button>

      </form>
    </div >
  )
}

export default Modal