/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useState } from "react";
import { getBooksBorrow } from "../../utils/apis/users/api";
import { Borrow } from "../../utils/apis/users/types";
import { BiEdit } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsTrashFill } from "react-icons/bs";
import ModalEditBorrow from "../Modals/ModalEditBorrow";
import ModalDeleteBorrow from "../Modals/ModalDeleteBorrow";
import { useToken } from "../../utils/contexts/token";
import { Meta } from "../../utils/types/api";
import { useSearchParams } from "react-router-dom";

const TableBorrows = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState<Meta>();

  const [bookBorrows, setBookBorrows] = useState<Borrow[]>([]);
  const [modalEditBorrow, setModalEditBorrow] = useState(false);
  const [modalDeleteBorrow, setModalDeleteBorrow] = useState(false);
  const [id, setId] = useState<string>();
  const { user } = useToken();

  useEffect(() => {
    fetchBorrows();
  }, []);

  const openModaledit = (id: string) => {
    setId(id);
    setModalEditBorrow(true);
  };
  const closeModalEdit = () => {
    setModalEditBorrow(false);
  };

  const openModalDelete = (id: string) => {
    setId(id);
    setModalDeleteBorrow(true);
  };
  const closeModalDelete = () => {
    setModalDeleteBorrow(false);
  };

  const fetchBorrows = async () => {
    if (searchParams.get("tab") !== "books") {
      const query = Object.fromEntries([...searchParams].filter((param) => param[0] !== "tab"));
      try {
        const result = await getBooksBorrow({ ...query });
        const { datas, ...rest } = result.payload;
        setMeta(rest);
        setBookBorrows(datas);
      } catch (error) {
        alert(error);
      }
    }
  };

  function handlePagination(page: string | number) {
    console.log(meta);
    console.log(page);
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/40 ${!modalEditBorrow ? "hidden" : ""} z-10`}
        onClick={closeModalEdit}></div>
      <ModalEditBorrow id={id as string} closeModal={closeModalEdit} isOpen={modalEditBorrow} />
      <ModalDeleteBorrow
        id={id as string}
        closeModal={closeModalDelete}
        isOpen={modalDeleteBorrow}
      />
      <table className="table-auto w-full text-left bg-white dark:bg-gray-900 rounded shadow-sm">
        <thead className="text-gray-800 text-lg dark:text-gray-200">
          <tr>
            <th className="px-6 py-4 border-r dark:border-gray-800 text-center">No</th>
            {user.role === "admin" ? (
              <th className="px-6 py-4 border-r dark:border-gray-800">User</th>
            ) : null}
            <th className="px-6 py-4 border-r dark:border-gray-800">Book</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Borrow Date</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Due Date</th>
            <th className="px-6 py-4 border-r dark:border-gray-800">Return Date</th>
            {user.role === "admin" ? <th className="px-6 py-4"></th> : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-base dark:text-white">
          {}
          {bookBorrows?.map((data, index) => (
            <tr key={data.id}>
              <td className="border border-l-0 border-r dark:border-gray-800 px-6 py-4 text-center">
                {index + 1}
              </td>
              {user.role === "admin" ? (
                <td className="border border-l-0 border-r dark:border-gray-800 px-6 py-4">
                  {data?.user.full_name}
                </td>
              ) : null}
              <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4">
                <span>{data?.book.title}</span>
              </td>
              <td className="border border-l-0 border-r dark:border-gray-800 px-6 py-4">
                {data?.borrow_date.slice(0, 10)}
              </td>
              <td className="border border-l-0 border-r dark:border-gray-800 px-6 py-4">
                {data?.due_date.slice(0, 10)}
              </td>
              <td className="border border-l-0 border-r dark:border-gray-800 px-6 py-4">
                {data?.return_date}
              </td>
              {user.role === "admin" && (
                <td className="border dark:border-gray-800 border-l-0 border-r border-b-0 px-6 py-4 ">
                  <div className="flex justify-center gap-x-8 text-xl">
                    <button onClick={() => openModaledit(`${data.id}`)}>
                      <BiEdit className={"text-green-700 dark:text-green-500 cursor-pointer "} />
                    </button>
                    <button onClick={() => openModalDelete(`${data.id}`)}>
                      <BsTrashFill className={"text-rose-700 dark:text-rose-500 cursor-pointer"} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-x-6 pt-10 justify-center">
        <button
          className="bg-white p-3 rounded-lg disabled:bg-slate-200 disabled:cursor-not-allowed"
          onClick={() => handlePagination(meta?.currentPage! - 1)}
          disabled={meta?.currentPage === 1}>
          <BsArrowLeft />
        </button>

        {Array.from({ length: meta?.totalPages! }, (_, index) => (
          <button
            className="bg-white p-3 rounded-lg"
            key={index}
            onClick={() => handlePagination(index + 1)}>
            <span>{index + 1}</span>
          </button>
        ))}

        <button
          className="bg-white p-3 rounded-lg disabled:bg-slate-200 disabled:cursor-not-allowed"
          onClick={() => handlePagination(meta?.currentPage! + 1)}
          disabled={meta?.currentPage === meta?.totalPages}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TableBorrows;
