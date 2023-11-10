/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react"
import Navbar from "../../components/Navbar"

import { useNavigate } from "react-router-dom"
import { handleRegister } from "../../utils/apis/auth"
import { authRegister } from "../../utils/apis/auth"

const Register = () => {
  const [userRegister, setUserRegister] = useState<authRegister>(
    {
      full_name: '',
      email: '',
      password: '',
      role: '',
      address: '',
      phone_number: ''
    }
  )
  const navigate = useNavigate()
  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const result = await handleRegister(userRegister)
      alert(result.message)
      navigate("/login")
    } catch (error: any) {
      alert(error)

    }
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <form onSubmit={register} className="w-[600px] border shadow-md px-10 py-8 flex flex-col gap-y-8 bg-white rounded-md">
          <h1 className="text-3xl font-bold text-gray-700">Register</h1>
          <div className="flex flex-col text-gray-700">
            <label htmlFor="full_name" className="text-lg font-semibold">Full Name</label>
            <input type="full_name" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="full_name" name="full_name" onChange={(e) => setUserRegister({ ...userRegister, full_name: e.target.value })} />

            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="email" name="email" onChange={(e) => setUserRegister({ ...userRegister, email: e.target.value })} />

            <label htmlFor="Password" className="text-lg font-semibold">Password</label>
            <input type="Password" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="Password" name="password" onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })} />

            <label htmlFor="role" className="text-lg font-semibold">Role</label>
            <select value={userRegister.role} name="role" id="role" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" onChange={(e) => setUserRegister({ ...userRegister, role: e.target.value })}>
              <option value="" selected disabled hidden>Choose here</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>

            <label htmlFor="address" className="text-lg font-semibold">Address</label>
            <input type="address" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="address" name="address" onChange={(e) => setUserRegister({ ...userRegister, address: e.target.value })} />

            <label htmlFor="phone_number" className="text-lg font-semibold">Phone Number</label>
            <input type="phone_number" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="phone_number" name="phone_number" onChange={(e) => setUserRegister({ ...userRegister, phone_number: e.target.value })} />
          </div>
          <button className="border py-3 font-semibold bg-sky-400 rounded text-white">Submit</button>
        </form>
      </div>
    </>

  )
}

export default Register