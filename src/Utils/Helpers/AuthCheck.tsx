import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

interface ICred {
  allowedRoles:
    | "admin"
    | "support"
    | "department-leader"
    | "security-chief"
    | "security-guard"
    | "graphic-design"
    | "";
}


export const AuthCheck = ({ allowedRoles }: ICred) => {
  const auth = useAuth();
  const location = useLocation();
  return auth.auth?.roles.includes(allowedRoles) ? (
    <Outlet />
  ) : auth.auth?.user ? (
    <Navigate to="/404" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};