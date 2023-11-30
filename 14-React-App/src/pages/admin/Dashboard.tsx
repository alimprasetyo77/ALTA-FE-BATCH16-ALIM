/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import Layout from "../../components/Layout";
import ListBooks from "../../components/ListBook";
import TableBorrows from "../../components/Tables/TableBorrows";
import { useSearchParams } from "react-router-dom";

const History = () => {
  // const [link, setLink] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  function handleTabChange(value: string) {
    searchParams.set("tab", value);
    for (const entry of searchParams.entries()) {
      console.log(entry);
      if (entry[0] !== "tab") searchParams.delete(entry[0]);
    }
    setSearchParams(searchParams);
  }

  return (
    <Layout>
      <div className="px-16 py-8 mx-auto container space-y-10">
        <div className="w-[200px]  mx-auto border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-sm font-semibold flex justify-center py-1 px-3">
          <button
            className={`${
              tabParam === "books" || !tabParam
                ? "bg-teal-500 dark:bg-gray-800 dark:border-gray-700 border text-white"
                : "bg-white dark:text-gray-300 dark:bg-gray-700 border-none text-black/70"
            } py-2 px-5 rounded-md`}
            onClick={() => handleTabChange("books")}>
            Books
          </button>
          <button
            className={`${
              tabParam === "borrows"
                ? "bg-teal-500 dark:bg-gray-800 dark:border-gray-700 border text-white"
                : "bg-white dark:text-gray-300 dark:bg-gray-700 border-none text-black/70"
            } py-2 px-5 rounded-md`}
            onClick={() => handleTabChange("borrows")}>
            Borrows
          </button>
        </div>
        {tabParam === "books" || !tabParam ? <ListBooks /> : <TableBorrows />}
      </div>
    </Layout>
  );
};

export default History;
