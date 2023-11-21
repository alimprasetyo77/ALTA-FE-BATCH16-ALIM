/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { Response } from "../../types/api";
import { LoginSchema, RegisterSchema } from ".";
export const handleLogin = async (data: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post("https://hells-kitchen.onrender.com/api/v1/login", {
      email: data.email,
      password: data.password
    })
    return response.data as Response<{ token: string }>
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export const handleRegister = async (data: RegisterSchema) => {
  const { full_name, email, password, role, address, phone_number } = data
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