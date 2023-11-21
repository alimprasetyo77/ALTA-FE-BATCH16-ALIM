/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { getBorrow, updateBorrow } from "../../utils/apis/borrow/api";
import {
  BorrowPayload,
  DetailBorrow,
  borrowPayload,
} from "../../utils/apis/borrow/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

interface props {
  id: string;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalEditBorrow = ({ id, isOpen, closeModal }: props) => {
  const [borrow, setBorrow] = useState<DetailBorrow>();
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
    resolver: zodResolver(borrowPayload),
    defaultValues: {
      borrow_date: new Date(),
      due_date: new Date(),
      return_date: new Date(),
    }
  });

  function formatDateToYYYYMMDD(date: any) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return new Date(`${year}-${month}-${day}`);
  }
  useEffect(() => {
    if (id) {
      fetchBorrow();
    }
  }, [id]);

  useEffect(() => {
    if (borrow) {
      setValue("borrow_date", formatDateToYYYYMMDD(new Date(`${borrow?.borrow_date}`)));
      setValue("due_date", formatDateToYYYYMMDD(new Date(`${borrow?.due_date}`)));
      setValue("return_date", formatDateToYYYYMMDD(new Date()));
    }
  }, [borrow]);

  const fetchBorrow = async () => {
    try {
      const result = await getBorrow(id);
      setBorrow(result.payload);
    } catch (error) {
      alert(error);
    }
  };


  const onSubmit = async (data: BorrowPayload) => {
    try {
      const result = await updateBorrow(id, data);
      alert(result.message);
      closeModal()
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`border shadow-md w-[600px] fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 p-6 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-xl z-20 ${!isOpen ? "hidden" : ""
        }`}
    >
      <div className="flex items-center justify-between text-gray-700 dark:text-gray-100 mb-4">
        <h3 className="font-bold text-xl">Edit Borrow</h3>
        <button
          className="outline-none border-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full font-bold text-xl px-2 transition"
          onClick={closeModal}
        >
          x
        </button>
      </div>
      <form
        className="flex flex-col text-gray-600 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="Borrow_date" className="font-semibold">
          Borrow Date
        </label>
        <input
          type="date"
          id="Borrow_date"
          className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700  placeholder:text-gray-500 outline-none mb-6"
          {...register("borrow_date", {
            // setValueAs: (value) => new Date(value),
            valueAsDate: true,
          })}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        />
        {errors.borrow_date?.message && (
          <p className="text-red-500 text-sm -mt-5">
            {errors.borrow_date.message}
          </p>
        )}

        <label htmlFor="Due_date">Due Date</label>
        <input
          type="date"
          id="Due_date"
          className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700  placeholder:text-gray-500 outline-none mb-6"
          {...register("due_date", {
            // setValueAs: (value) => new Date(value),
            valueAsDate: true,
          })}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        />
        {errors.due_date?.message && (
          <p className="text-red-500 text-sm -mt-5">
            {errors.due_date.message}
          </p>
        )}

        <label htmlFor="Return_date" className="font-semibold">
          Return Date
        </label>
        <input
          type="date"
          id="Return_date"
          className="border rounded-md px-4 py-2 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700  placeholder:text-gray-500 outline-none mb-6"
          {...register("return_date", {
            // setValueAs: (value) => new Date(value),
            valueAsDate: true,
          })}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        />
        {errors.return_date?.message && (
          <p className="text-red-500 text-sm -mt-5">
            {errors.return_date.message}
          </p>
        )}
        <button
          className="border py-3 font-semibold bg-sky-400 dark:bg-white dark:text-gray-900 rounded-md text-white disabled:bg-sky-300 flex justify-center "
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <FaSpinner className={"animate-spin text-2xl"} />
          ) : (
            "Save changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default ModalEditBorrow;
