/* eslint-disable @typescript-eslint/no-explicit-any */
import { BorrowPayload, BorrowSchema, DetailBorrow } from './types';
import axiosWithConfig from "../axiosWithConfig"
import { Response } from '../../types/api';

export const getBorrow = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`https://hells-kitchen.onrender.com/api/v1/borrows/${id}`)
    return response.data as Response<DetailBorrow>
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export const createBorrow = async (data: BorrowSchema) => {
  try {
    const response = await axiosWithConfig.post(`https://hells-kitchen.onrender.com/api/v1/borrows`, data)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message)

  }
}

export const updateBorrow = async (id: string, data: BorrowPayload) => {
  try {
    const response = await axiosWithConfig.put(`https://hells-kitchen.onrender.com/api/v1/borrows/${id}`, data)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export const deleteBorrow = async (id: string) => {
  try {
    const response = await axiosWithConfig.delete(`https://hells-kitchen.onrender.com/api/v1/borrows/${id}`)
    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}