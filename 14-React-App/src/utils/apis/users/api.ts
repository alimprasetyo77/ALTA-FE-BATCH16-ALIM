/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { Profile } from ".";
import { PayloadPagination, Response } from "../../types/api";
import { Borrow, ProfileUpdateType } from "./types";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/users"
    );

    return response.data as Response<Profile>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateProfile = async (body: ProfileUpdateType) => {
  try {
    const response = await axiosWithConfig.put(
      "https://hells-kitchen.onrender.com/api/v1/users", body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteProfile = async () => {
  try {
    const response = await axiosWithConfig.delete(
      "https://hells-kitchen.onrender.com/api/v1/users"
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getBooksBorrow = async () => {
  try {
    const response = await axiosWithConfig.get("https://hells-kitchen.onrender.com/api/v1/borrows")
    return response.data as Response<PayloadPagination<Borrow[]>>
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}