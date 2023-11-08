import { useState } from "react"
import Navbar from "../../components/Navbar"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const login = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email && password) {
      if (email === "admin@gmail.com" && password === "a") {
        sessionStorage.setItem("role", "admin")
        navigate("/")
        return
      }
      sessionStorage.setItem("role", "user")
      navigate("/")
    } else {
      navigate("/login")
      alert("Login gagal")
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={login} className="w-[600px] border shadow-md px-10 py-8 flex flex-col gap-y-8 bg-white rounded-md">
          <h1 className="text-3xl font-bold text-gray-700">Login</h1>
          <div className="flex flex-col text-gray-700">
            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="Password" className="text-lg font-semibold">Password</label>
            <input type="Password" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="border py-3 font-semibold bg-sky-400 rounded text-white">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login