import Layout from "../../components/Layout"

const Profile = () => {
  return (
    <Layout >
      <div className="py-16 px-32  flex-grow space-y-10">
        <h3 className="font-Montserrat font-semibold text-4xl ">My Profile</h3>
        <div className="bg-white border shadow-sm rounded overflow-hidden w-2/3 h-96 mx-auto flex flex-col items-center relative">
          <div className="bg-teal-400 h-1/2 w-full">
            <img src="https://moesaid.github.io/cleopatra/img/user.svg" alt="profile" className="w-48 h-48 absolute top-8 left-1/2 -translate-x-1/2 border-2 rounded-full border-white" />
          </div>
          <div className="h-1/2 w-full flex gap-y-6 font-Montserrat items-center px-20 text-gray-600 flex-col">
            <span className="text-3xl font-medium pt-12">Admin</span>
            <p className="text-sm text-gray-500">No intro yet.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile