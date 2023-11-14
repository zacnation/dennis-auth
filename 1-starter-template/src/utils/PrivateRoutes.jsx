import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // const token = localStorage.getItem("token");
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
