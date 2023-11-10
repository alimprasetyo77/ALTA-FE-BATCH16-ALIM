/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { Response } from "../../types/api";
import { authRegister } from "./types";

export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await axiosWithConfig.post("https://hells-kitchen.onrender.com/api/v1/login", {
      email: email,
      password: password
    })
    return response.data as Response<{ token: string }>
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export const handleRegister = async (param: authRegister) => {
  const { full_name, email, password, role, address, phone_number } = param
  try {
    const response = await axiosWithConfig.post("https://hells-kitchen.onrender.com/api/v1/register", {
      full_name,
      email,
      password,
      role,
      address,
      phone_number,
    });

    return response.data as Response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};