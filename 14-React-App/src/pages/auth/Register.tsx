import Navbar from "../../components/Navbar"

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[600px] border shadow-md px-10 py-8 flex flex-col gap-y-8 bg-white rounded-md">
          <h1 className="text-3xl font-bold text-gray-700">Register</h1>
          <div className="flex flex-col text-gray-700">
            <label htmlFor="Nama" className="text-lg font-semibold">Nama</label>
            <input type="Nama" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="Nama" />
            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="email" />
            <label htmlFor="Password" className="text-lg font-semibold">Password</label>
            <input type="Password" className="border outline-none shadow-sm px-5 py-3 rounded mb-8" id="Password" />
          </div>
          <button className="border py-3 font-semibold bg-sky-400 rounded text-white">Submit</button>
        </div>
      </div>
    </>

  )
}

export default Register