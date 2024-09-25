import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextsprovider";

export default function GuestLayout() {
  const { user, token } = useStateContext();
  if (token) {
    <Navigate to={"/"}></Navigate>;
  }
  return (
    <div>
      <div>Gusest</div>
      <Outlet />
    </div>
  );
}
