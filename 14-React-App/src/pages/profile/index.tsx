import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { Profile as prof, getProfile } from "../../utils/apis/users"

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
        <h3 className="font-Montserrat font-semibold text-4xl ">My Profile</h3>
        <div className="bg-white border shadow-sm rounded overflow-hidden w-1/2 h-96 mx-auto flex flex-col items-center relative">
          <div className="bg-teal-400 h-1/2 w-full">
            <img src={profile?.profile_picture} alt="profile" className="w-48 h-48 absolute top-8 left-1/2 -translate-x-1/2 border-2 rounded-full border-white" />
          </div>
          <div className="h-1/2 w-full flex gap-y-6 font-Montserrat items-center px-20 text-gray-600 flex-col">
            <span className="text-3xl font-medium pt-12">{profile?.full_name}</span>
            <p className="text-sm text-gray-500">Role : {profile?.role}</p>
          </div>
        </div>
        <div className="bg-white py-8 px-16 space-y-6 text-sm font-semibold text-gray-500  w-1/2 mx-auto">
          <h2 className="text-lg text-gray-600 pb-4">Information Account :</h2>
          <div className="flex gap-10">
            <span className="w-1/4">Email</span>
            <span>:</span>
            <span>{profile?.email}</span>
          </div>
          <div className="flex gap-10">
            <span className="w-1/4">Phone Number</span>
            <span>:</span>
            <span>{profile?.phone_number}</span>
          </div>
          <div className="flex gap-10">
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