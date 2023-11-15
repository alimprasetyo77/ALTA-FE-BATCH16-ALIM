import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const token = false
  const authProtected = ["/login", "/register"];
  const tokenProtected = ["/profile", "/edit-profile", "/dashboard"];
  const roleProtected = ["/dashboard"];
  /*
   * TODO: Add protected routes based on token and role
   */
  return <Outlet />;
};

export default ProtectedRoutes;