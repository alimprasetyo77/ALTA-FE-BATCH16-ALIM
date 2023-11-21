/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from '../../components/Layout'
import { deleteProfile, updateProfile } from '../../utils/apis/users'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useToken } from '../../utils/contexts/token'
import { FaSpinner } from 'react-icons/fa'
import { ProfileUpdateType, profileUpdateSchema } from '../../utils/apis/users/types'


const EditProfile = () => {
  const { user } = useToken()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      address: "",
      phone_number: "",
      profile_picture: ""
    }, values: {
      full_name: user.full_name as string,
      email: user.email as string,
      password: "",
      address: user.address as string,
      phone_number: user.phone_number as string,
      profile_picture: user.profile_picture as string
    }
  })
  const handleUpdateProfile = async (body: ProfileUpdateType) => {
    body.profile_picture = body.profile_picture[0].name
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
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Layout>
      <div className='py-16 px-32  flex-grow space-y-10'>

        <h1 className='text-4xl font-semibold font-Montserrat dark:text-white'>Settings</h1>
        <div className='bg-white dark:bg-gray-900 dark:border-gray-800 border space-y-10 rounded shadow-sm px-24 py-12 w-2/3 mx-auto '>
          <form className='space-y-6 dark:text-white' onSubmit={handleSubmit(handleUpdateProfile)}>
            <div className='space-y-2'>
              <label htmlFor="full_name" className='text-lg'>Full Name</label>
              <input type="text" id='full_name' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("full_name")} disabled={isSubmitting} aria-disabled={isSubmitting} />
            </div>

            <div className='space-y-2'>
              <label htmlFor="email" className='text-lg'>Email</label>
              <input type="email" id='email' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("email")} disabled={isSubmitting} aria-disabled={isSubmitting} />
              {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>}

            </div>

            <div className='space-y-2'>
              <label htmlFor="password" className='text-lg'>Password</label>
              <input type="password" id='password' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("password")} disabled={isSubmitting} aria-disabled={isSubmitting} />

              {errors.password && <p className="text-red-500 text-sm -mt-2">{errors.password.message}</p>}

            </div>

            <div className='space-y-2'>
              <label htmlFor="address" className='text-lg'>Address</label>
              <input type="address" id='address' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("address")} disabled={isSubmitting} aria-disabled={isSubmitting} />
              {errors.address && <p className="text-red-500 text-sm -mt-2">{errors.address.message}</p>}

            </div>

            <div className='space-y-2'>
              <label htmlFor="phone_number" className='text-lg'>Phone number</label>
              <input type="text" id='phone_number' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("phone_number")} disabled={isSubmitting} aria-disabled={isSubmitting} />
              {errors.phone_number && <p className="text-red-500 text-sm -mt-2">{errors.phone_number.message}</p>}

            </div>

            <div className='space-y-2'>
              <label htmlFor="profile_picture" className='text-lg'>Profile picture</label>
              <input type="file" id='profile_picture' className='py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full rounded outline-none dark:text-white border text-gray-500 focus:text-gray-900 tracking-wider' {...register("profile_picture")} disabled={isSubmitting} aria-disabled={isSubmitting} />
              {errors.profile_picture && <p className="text-red-500 text-sm -mt-2">{errors.profile_picture.message as ""}</p>}

            </div>

            <button className='bg-teal-400 rounded-md px-4 py-2 text-white font-semibold' disabled={isSubmitting} aria-disabled={isSubmitting}>{isSubmitting ? <FaSpinner className={"animate-spin text-2xl"} /> : "Submit"}</button>
          </form>

          <hr />
          <div className='space-y-3'>
            <h1 className='font-semibold text-lg dark:text-white'>Delete account</h1>
            <button className='px-4 py-2 rounded-md text-gray-500 dark:text-white bg-gray-100 dark:bg-gray-600 dark:hover:bg-red-500 hover:bg-red-400 hover:text-white transition duration-300' onClick={handleDeleteAccount}>delete my account</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EditProfile