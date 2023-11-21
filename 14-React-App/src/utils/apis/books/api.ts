/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, PayloadPagination } from "../../types/api";
import { Book } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { CreateBookSchema } from "./types";
export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books"
    );
    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
export const getDetailBook = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`
    );

    return response.data as Response<Book>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const createBook = async (data: CreateBookSchema) => {
  try {
    const response = await axiosWithConfig.post(`https://hells-kitchen.onrender.com/api/v1/books`, data)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export const updateBook = async (id: string, data: CreateBookSchema) => {
  try {
    const response = await axiosWithConfig.put(`https://hells-kitchen.onrender.com/api/v1/books/${id}`, data)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export const deleteBook = async (id: string) => {
  try {
    const response = await axiosWithConfig.delete(`https://hells-kitchen.onrender.com/api/v1/books/${id}`)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message);

  }
}