import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextsprovider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();
  if (!token) {
    <Navigate to={'/login'}></Navigate>
  }
  return (
    <div>
      <div>Default</div>
      <Outlet />
    </div>
  );
}
