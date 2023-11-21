import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { Profile as prof, getProfile } from "../../utils/apis/users"
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState<prof>();
  console.log(profile)
  useEffect(() => {
    getDataProfile();
  }, []);

  const getDataProfile = async () => {
    try {
      const result = await getProfile()
      setProfile(result.payload)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <Layout >
      <div className="py-16 px-32  flex-grow space-y-10">
        <h3 className="font-Montserrat font-semibold text-4xl dark:text-white">My Profile</h3>
        <div className="bg-white dark:bg-gray-900 dark:border-gray-800 border shadow-sm rounded overflow-hidden w-1/2 h-[450px] mx-auto flex flex-col items-center relative">
          <div className="bg-teal-400 dark:bg-gray-600 h-1/2 w-full">
            <img src={profile?.profile_picture} alt="profile" className="w-52 h-52 absolute top-14 left-1/2 -translate-x-1/2 border-2 rounded-full border-white" />
          </div>
          <div className="grow w-full flex gap-y-6 font-Montserrat items-center px-20 text-gray-600 dark:text-white flex-col">
            <span className="text-3xl font-medium pt-12">{profile?.full_name}</span>
            <p className="text-sm text-gray-500 dark:text-white">Role : {profile?.role}</p>
            <Link to={"/settings"} className="flex items-center gap-x-2 bg-sky-400 p-2 rounded-lg text-white text-sm"><BiEdit /> Edit Profile</Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 py-8 px-16 space-y-6 text-sm font-semibold text-gray-500  w-1/2 mx-auto">
          <h2 className="text-lg text-gray-600 dark:text-white">Information Account :</h2>
          <div className="flex gap-10 dark:text-gray-200">
            <span className="w-1/4">Email</span>
            <span>:</span>
            <span>{profile?.email}</span>
          </div>
          <div className="flex gap-10 dark:text-gray-200">
            <span className="w-1/4">Phone Number</span>
            <span>:</span>
            <span>{profile?.phone_number}</span>
          </div>
          <div className="flex gap-10 dark:text-gray-200">
            <span className="w-1/4">Address</span>
            <span>:</span>
            <span>{profile?.address}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile