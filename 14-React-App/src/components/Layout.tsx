import { ReactNode } from "react"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

interface Props {
  children: ReactNode,
}

const Layout = ({ children }: Readonly<Props>) => {
  return (
    <div className="font-roboto  min-h-screen">
      <Navbar />
      <div className="bg-gray-100 h-full flex">
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default Layout