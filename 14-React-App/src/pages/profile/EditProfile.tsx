import { useState } from 'react'
import Layout from '../../components/Layout'

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Layout>
      <div className='py-16 px-32  flex-grow space-y-10'>

        <h1 className='text-4xl font-semibold font-Montserrat'>Settings</h1>
        <div className='bg-white border space-y-10 rounded shadow-sm px-24 py-12 w-2/3 mx-auto '>
          <div className='space-y-2'>
            <label htmlFor="email" className='text-lg'>Email</label>
            <input type="email" id='email' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 tracking-wider' value={"admin@gmail.com"} />
          </div>
          <div className='space-y-2'>
            <label htmlFor="password" className='text-lg'>Password</label>
            <input type={`${showPassword ? "text" : "password"}`} id='password' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 tracking-wider' />
            <div className='flex gap-x-2'>
              <input type="checkbox" id="show-password" onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor='show-password' className='text-sm ' >Show </label>
            </div>
          </div>
          <button className='bg-teal-400 rounded-sm px-4 py-2 text-white font-semibold'>Update</button>
          <hr />
          <div className='space-y-3'>
            <h1 className='font-semibold text-lg'>Delete account</h1>
            <button className='px-4 py-2 rounded-md text-gray-500 bg-gray-100 hover:bg-red-400 hover:text-white transition duration-300'>delete my account</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EditProfile