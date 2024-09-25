import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextsprovider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();
  if (!token) {
    <Navigate to={'/login'}></Navigate>
  }
  return (
    <div id="defaultLayout">
      <div className="content">
        <header>
          <div>Header</div>
          <div>{user ? user.name : "Guest"}</div>
        </header>
      </div>
      <Outlet />
    </div>
  );
}
