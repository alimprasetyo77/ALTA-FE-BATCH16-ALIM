import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Profile, deleteProfile, getProfile, updateProfile } from '../../utils/apis/users'

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [dataProfile, setDataProfile] = useState<Partial<Profile>>({
    full_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
  })

  useEffect(() => {
    fetchDataProfile()
  }, [])


  const fetchDataProfile = async () => {
    try {
      const result = await getProfile()
      setDataProfile(result.payload)
    } catch (error) {
      alert(error)
    }
  }

  const handleUpdateProfile = async () => {
    const body = {
      full_name: dataProfile.full_name ?? "",
      email: dataProfile.email ?? "",
      password: dataProfile.password ?? "",
      address: dataProfile.address ?? "",
      phone_number: dataProfile.phone_number ?? "",
    };
    try {
      const result = await updateProfile(body)
      alert(result.message)
    } catch (error) {
      alert(error)
    }
  }

  const handleDeleteAccount = async () => {
    try {
      const result = await deleteProfile()
      localStorage.removeItem("token")
      alert(result.message)
      window.location.href = "/"
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Layout height='min-h-screen'>
      <div className='py-16 px-32  flex-grow space-y-10'>

        <h1 className='text-4xl font-semibold font-Montserrat'>Settings</h1>
        <div className='bg-white border space-y-10 rounded shadow-sm px-24 py-12 w-2/3 mx-auto '>
          <div className='space-y-2'>
            <label htmlFor="email" className='text-lg'>Email</label>
            <input type="email" id='email' name='email' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' value={"admin@gmail.com"} onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, email: e.target.value };
              })
            } />
          </div>
          <div className='space-y-2'>
            <label htmlFor="full_name" className='text-lg'>Full Name</label>
            <input type="text" id='full_name' name='full_name' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' value={dataProfile?.full_name} onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, full_name: e.target.value };
              })
            } />
          </div>
          <div className='space-y-2'>
            <label htmlFor="password" className='text-lg'>Password</label>
            <input type={`${showPassword ? "text" : "password"}`} id='password' name='password' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, password: e.target.value };
              })
            } />
            <div className='flex gap-x-2'>
              <input type="checkbox" id="show-password" onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor='show-password' className='text-sm ' >Show </label>
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor="phone_number" className='text-lg'>Phone number</label>
            <input type="text" id='phone_number' name='phone_number' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' value={dataProfile?.phone_number} onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, phone_number: e.target.value };
              })
            } />
          </div>
          <div className='space-y-2'>
            <label htmlFor="address" className='text-lg'>Address</label>
            <input type="address" id='address' name='address' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' value={dataProfile?.address} onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, address: e.target.value };
              })
            } />
          </div>
          <div className='space-y-2'>
            <label htmlFor="profile_picture" className='text-lg'>Profile picture</label>
            <input type="file" id='profile_picture' name='profile_picture' className='py-2 px-3 bg-gray-100 w-full rounded outline-none border text-gray-500 focus:text-gray-900 tracking-wider' onChange={(e) =>
              setDataProfile((prevState) => {
                return { ...prevState, profile_picture: e.target.value };
              })
            } />
          </div>

          <button className='bg-teal-400 rounded-sm px-4 py-2 text-white font-semibold' onClick={handleUpdateProfile}>Update</button>
          <hr />
          <div className='space-y-3'>
            <h1 className='font-semibold text-lg'>Delete account</h1>
            <button className='px-4 py-2 rounded-md text-gray-500 bg-gray-100 hover:bg-red-400 hover:text-white transition duration-300' onClick={handleDeleteAccount}>delete my account</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EditProfile