import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
      <div>
        <div>Gusest</div>
        <Outlet />
      </div>
    );
}
