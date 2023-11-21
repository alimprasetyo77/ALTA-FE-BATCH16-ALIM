/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaSpinner } from "react-icons/fa"
import Navbar from "../../components/Navbar"
import { LoginSchema, handleLogin, loginSchema } from "../../utils/apis/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToken } from "../../utils/contexts/token"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { changeToken } = useToken()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = async (data: LoginSchema) => {
    try {
      const result = await handleLogin(data)
      // const token = result.payload.token
      // localStorage.setItem("token", token)
      changeToken(result.payload.token);
      navigate("/")
      alert("Login Successfuly.")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100" >
        <form onSubmit={handleSubmit(login)} className="w-[600px] border shadow-md px-10 py-8 flex flex-col gap-y-8 bg-white rounded-md" >
          <h1 className="text-3xl font-bold text-gray-700">Login</h1>
          <div className="flex flex-col text-gray-700">

            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" className="border outline-none shadow-sm px-5 py-3 rounded mb-4" id="email" {...register("email")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>}

            <label htmlFor="Password" className="text-lg font-semibold">Password</label>
            <input type="Password" className="border outline-none shadow-sm px-5 py-3 rounded mb-4" id="Password" {...register("password")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            {errors.password && <p className="text-red-500 text-sm -mt-2">{errors.password.message}</p>}
          </div>
          <button className="border py-3 font-semibold bg-sky-400 rounded text-white flex justify-center disabled:bg-sky-300" disabled={isSubmitting} aria-disabled={isSubmitting}>{isSubmitting ? <FaSpinner className={"animate-spin text-2xl"} /> : "Login"}</button>
        </form>
      </div>
    </>
  )
}

export default Login