/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../components/Navbar"

import { useNavigate } from "react-router-dom"
import { RegisterSchema, handleRegister, registerSchema } from "../../utils/apis/auth"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaSpinner } from "react-icons/fa"
import { useState } from "react"
import { errorToast, successToast } from "../../utils/toast"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
      role: "",
      address: "",
      phone_number: ""
    }
  })

  const onRegister = async (data: RegisterSchema) => {
    try {
      const result = await handleRegister(data)
      successToast(result.message)
      navigate("/login")
    } catch (error: any) {
      errorToast(error.toString())
    }
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-8">
        <form onSubmit={handleSubmit(onRegister)} className="w-[600px] border shadow-md px-10 py-8 flex flex-col gap-y-8 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-md">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-white">Register</h1>
          <div className="flex flex-col text-gray-700 dark:text-white">
            <label htmlFor="full_name" className="text-lg font-semibold">Full Name</label>
            <input type="full_name" className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="full_name" {...register("full_name")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.full_name && <p className="text-red-500 text-sm -mt-5">{errors.full_name.message}</p>}

            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="email" {...register("email")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.email && <p className="text-red-500 text-sm -mt-5">{errors.email.message}</p>}

            <label htmlFor="Password" className="text-lg font-semibold">Password</label>
            <input type={`${showPassword ? "text" : "password"}`} className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="Password" {...register("password")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.password && <p className="text-red-500 text-sm -mt-5">{errors.password.message}</p>}

            <label htmlFor="Repassword" className="text-lg font-semibold">Repassword</label>
            <input type={`${showPassword ? "text" : "password"}`} className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="Repassword" {...register("repassword")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.repassword && <p className="text-red-500 text-sm -mt-5">{errors.repassword.message}</p>}

            <div className='flex justify-end gap-x-2 -mt-5'>
              <input type="checkbox" id="show-password" onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor='show-password' className='text-sm ' >Show </label>
            </div>

            <label htmlFor="role" className="text-lg font-semibold mt-5">Role</label>
            <select id="role" className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" {...register("role")} disabled={isSubmitting} aria-disabled={isSubmitting}>
              <option value="" selected disabled hidden>Choose here</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role?.message && <p className="text-red-500 text-sm -mt-5">{errors.role.message}</p>}

            <label htmlFor="address" className="text-lg font-semibold">Address</label>
            <input type="address" className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="address" {...register("address")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.address && <p className="text-red-500 text-sm -mt-5">{errors.address.message}</p>}

            <label htmlFor="phone_number" className="text-lg font-semibold">Phone Number</label>
            <input type="phone_number" className="border outline-none shadow-sm px-5 py-3 rounded mb-8 dark:text-white dark:bg-gray-800 dark:border-gray-700" id="phone_number" {...register("phone_number")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.phone_number && <p className="text-red-500 text-sm -mt-5">{errors.phone_number.message}</p>}

          </div>
          <button className="border py-3 font-semibold bg-sky-400 dark:bg-white dark:text-gray-900 rounded text-white disabled:bg-sky-300 flex justify-center" disabled={isSubmitting} aria-disabled={isSubmitting}>{isSubmitting ? <FaSpinner className={"animate-spin text-2xl"} /> : "Submit"}</button>
        </form>
      </div>
    </>

  )
}

export default Register